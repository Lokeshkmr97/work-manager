import mongoose, { Schema } from "mongoose";

const UserSchema=new Schema({
    name:String,
    email:{
        type:String,
        required:[true,"Email is requered."],
        unique:true,
        },
    password:{
        type:String,
        required:[true,"Password is required."]
            },
    about:String,
    profileUrl:String,
})

export const User=mongoose.models.users || mongoose.model("users",UserSchema);

 


// model("collectionName" , Schemaname)