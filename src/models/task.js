import mongoose, { Schema } from "mongoose";


const TaskSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true
    },
    addedDate:{
        type:Date,
        default:Date.now() 
    },
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending"
    },
    // here we use relation b/w task and user model using user id .
    userId:{
        type:mongoose.ObjectId,
        required:true,
    }
})

export const Task=mongoose.models.tasks || mongoose.model("tasks" , TaskSchema);