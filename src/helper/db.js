import mongoose from "mongoose"
export const connectDb= async ()=>{

    try{
      const {connection} = await mongoose.connect(process.env.MONGOOSE_DB_URI,{
            dbName:"work-manager",
        });

        console.log("db connected...")
        console.log(connection.host)
    }
    catch(error){
        console.log("failed to connect with database");
        console.log(error)
    }
}