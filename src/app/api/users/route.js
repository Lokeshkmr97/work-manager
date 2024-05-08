import { connectDb } from "@/helper/db";
import { User } from "@/models/users";
import { NextResponse } from "next/server"

connectDb();

export async function GET(request){
    
    let users=[];
    try {
        
        users= await User.find();



    } catch (error) {
        console.log("Do not fetch user details !!");
        NextResponse.json({
            message:"User Data not fetched",
            status:false,
        })
    }
    return NextResponse.json(users);

}

export async function POST(request){

    // fetch user details from request 

    const {name,email,password,about,profileUrl}= await request.json(); // await is used because of request return a promises.

    // create user object with user model
    const user=new User({
        name,
        email,
        password,
        about,
        profileUrl,
    });

    try {
        //  Save the object to database.
        const createdUser= await user.save();

        const response=NextResponse.json(user,{
        status:201,
    });

    return response;
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to created user !!",
            status: false,
        })
    }

}
