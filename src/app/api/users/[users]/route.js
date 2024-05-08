import { User } from "@/models/users";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";

//  for the dynamic api (routes)

//  Connect to the database

connectDb();

// get user by id.
export const GET=async (request,{ params })=>{

    // const { userId }=params;
    try {
        
        const user=await User.findById(params.users);
        return NextResponse.json(user)

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Error in getting single user",
            status:false,
        })
        
    }
}


//  delete api
export async function DELETE(request, { params }){
    
    // const { userId }=params.users;
    // console.log(params);
    // console.log(userId)

    try {

        await User.deleteOne({
            _id:params.users,
        });

        return NextResponse.json({
            message:"Delete User Successfully !!",
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


//  Update user 

export const PUT=async (request, { params })=>{

    // const {userId}=params;

    const {name,password,about,profileUrl}= await request.json();


    try {
        
        //  get here user id 
        const user= await User.findById(params.users);
        user.name=name;
        user.password=password;
        user.about=about;
        user.profileUrl=profileUrl;

        const updateduser=await user.save();
        
        return NextResponse.json(updateduser);

    } catch (error) {
        return NextResponse.json({
            message:"Error in updating user!!",
            success:false,
        })
        
    }
}