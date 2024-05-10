import { User } from "@/models/users";
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

export async function GET(request){

    const loginToken=request.cookies.get("loginToken")?.value
    console.log(loginToken)

    const data=jwt.verify(loginToken,process.env.JWT_KEY);
    const user=await User.findById(data._id).select("-password"); // this select is used for the remove password.

    return NextResponse.json(user)
}