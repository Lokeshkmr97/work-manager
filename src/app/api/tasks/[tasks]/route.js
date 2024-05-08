
//  to use dynamic route (api)

import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

connectDb();

// to get the single task.
export async function GET(request , { params }){
    // const {taskId}=params;
    console.log(params)
    try {
        console.log("hello this is lokesh")
        const task=await Task.findById(params.tasks);
        return NextResponse.json(task);
        
    } catch (error) {
        console.log(error);
        return getResponseMessage("failed to fetch single task!!",404,false);
        
    }
}

// to update the task.
export async function PUT(request , { params }){

    try {
        // const {taskId} =params;
        // console.log(taskId);
        // console.log(params);
        const {title,content,status} = await request.json();
        let task=await Task.findById(params.tasks);
        task.title=title;
        task.content=content;
        task.status=status;

        const updatedTask=await task.save();
        return NextResponse.json(updatedTask);
        
    } catch (error) {
        console.log(error)
        return getResponseMessage("Failed to updated task.!!" , 404 , false);
        
    }
}


//  to Delete the taks
export async function DELETE(request, { params }){
    
    // const { userId }=params.users;
    // console.log(params);
    // console.log(userId)

    try {

        await Task.deleteOne({
            _id:params.tasks,
        });

        return NextResponse.json({
            message:"Delete Task Successfully !!",
            status:true,
        });
        
    } catch (error) {

        console.log(error);
        return NextResponse.json({
            message:"Error in deleting User !!",
            status:false,
        })
        
    }
}
