import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//  this api is used for the getting all task of a single user.

//  api route - /api/users/[userId]/tasks
export async function GET(request , { params }){

    // const {userId} =params ;
    console.log(params);
    try {

       const tasks= await Task.find({
        userId:params.users
       });

       return NextResponse.json(tasks);
        
    } catch (error) {

        console.log(error);
        return getResponseMessage("Failed to getting task by User!!" , 404 , false);
        
    }
}