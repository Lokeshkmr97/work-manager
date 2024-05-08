import { NextResponse } from "next/server"

export const getResponseMessage=(messageText,statusCode,successMessage)=>{

    return NextResponse.json({
        message:messageText,
        success:successMessage
    },
{
    status:statusCode
})
}
