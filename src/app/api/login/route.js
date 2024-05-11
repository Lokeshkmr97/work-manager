import { User } from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";
import { connectDb } from "@/helper/db";

connectDb()
export async function POST(request){
    const {email,password}= await request.json();

    try {
        //  get user from the database.
        const user=await User.findOne({
            email:email,
        });

        //  to check user is found or not in the database
        if(user==null){
            throw new Error("User not found!!");
        }

        // compare password 
        const matched=bcrypt.compareSync(password,user.password);
        if(!matched){
            throw new Error("Invalid Password.");
        }

        //  generate the JWT token to verify the user data.

        const token=jwt.sign({
            _id:user._id,
            name:user.name
        },process.env.JWT_KEY);

        //  create NextResponse cookie

        const response=NextResponse.json({
            message:"Login Successfully!!",
            success:true,
            user:user, // this line is used for sending user detail in the frontend part.
        });

        response.cookies.set("loginToken",token,{
            expiresIn:"1d",
            httpOnly:true
        });

        return response;

        
    } catch (error) {

        return NextResponse.json({
            message:error.message,
            success:false
        },{
            status:500
        })
        
    }
}