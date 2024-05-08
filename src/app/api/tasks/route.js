
// Task api

import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";


connectDb();
// get all the task
export async function GET(request){

    try {
        const tasks=await Task.find();
        return NextResponse.json(tasks);
        
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in getting Data !!! ",false,404) // this is a user define function .
        
    }


}

//  create task 
export async function POST(request){

    const {title,content,userId} =await request.json();

    try {
        
        const task=new Task({
            title,
            content,
            userId,
        });

        const createTask=await task.save();

        const response=NextResponse.json(task,{
            message:"Task Created Successfully !!",
            status:201,
            success:true
        });

        return response;

    } catch (error) {
        console.log(error);
        console.log("My message");
        return getResponseMessage(" failed to create tasks ! " , 500,false);
        
    }

}