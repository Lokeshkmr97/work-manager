"use client";
import React, { useState } from "react";
import signUpUser from "../assets/signUpUser.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { signUp } from "@/services/signUpService";

const SignUp = () => {

    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        about:"",
        profileUrl:"http://localhost:3000/image/lokesh",
    })

    const resetForm=()=>{
        setData({
            name: "",
            email: "",
            password: "",
            about:""
          });
    }

    {/* handle function for signup form*/}

    const SignUpHandler= async (event)=>{
        event.preventDefault();
        try {
            // this is validation of checking user name 
            if(data.name.trim()==="" || data.name==null){
                toast.warning("Name is required. !!",{
                    position :"top-right"
                });
                return;
            }

            const result =await signUp(data); // this signUp funtion is used from import { signUp } from "@/services/signUpService";
            console.log(result);
            toast.success("User register successfully", {
                position: "top-center",
              });
        
              resetForm();

        } catch (error) {
            console.log(error);
            toast.error("Failed to SignUp User", {
                position: "top-center",
              });
            
        }
    }

  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="border col-span-4 col-start-5 shadow-sm shadow-gray-200 p-5">
      <div className="flex justify-center m-3">
          <Image
            src={signUpUser}
            style={{
              width: "35%",
            }}
            alt="Signup Svg"
          />
        </div>
        <div className="">
          <h1 className="text-3xl text-center text-blue-500 font-semibold">Sign Up</h1>
        </div>
        <form action="#!" onSubmit={SignUpHandler}>
          {/* user name field  */}
          <div className="mt-2">
            <label htmlFor="user_name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-2.5 rounded-lg focus:ring-red-300 text-xl bg-gray-100 text-black"
              id="user_name"
              name="user_name"
            //   // here is writen function for the storing data into the database.
              onChange={(event) => {
                setData({
                  ...data, // ...data is used for add all previous data in the array.
                  name: event.target.value,
                });
              }}
              value={data.name}
            />
          </div>
          {/* user email field  */}
          <div className="mt-2">
            <label htmlFor="user_email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2.5 rounded-lg focus:ring-red-300 text-xl bg-gray-100 text-black"
              id="user_email"
              name="user_email"
            //   // here is writen function for the storing data into the database.
              onChange={(event) => {
                setData({
                  ...data, // ...data is used for add all previous data in the array.
                  email: event.target.value,
                });
              }}
              value={data.email}
            />
          </div>
          {/* user password field  */}
          <div className="mt-2">
            <label htmlFor="user_password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2.5 rounded-lg focus:ring-red-300 text-xl bg-gray-100 text-black"
              id="user_password"
              name="user_password"
            //   // here is writen function for the storing data into the database.
              onChange={(event) => {
                setData({
                  ...data, // ...task is used for add all previous data in the array.
                  password: event.target.value,
                });
              }}
              value={data.password}
            />
          </div>
          {/* user about field  */}
          <div className="mt-2">
            <label htmlFor="user_about" className="block font-medium mb-2">
              About
            </label>
            <textarea
              className="w-full p-2.5 rounded-lg focus:ring-red-300 text-xl bg-gray-100 text-black"
              id="user_about"
              name="user_about"
              rows={4}
            //   // here is writen function for the storing data into the database.
              onChange={(event) => {
                setData({
                  ...data, // ...task is used for add all previous data in the array.
                  about: event.target.value,
                });
              }}
              value={data.about}
            />
          </div>

          {/* buttons */}
          <div className="mt-4 flex justify-center">
            <button type="submit" className="bg-blue-600 rounded-lg py-2 px-3 hover:bg-blue-900"
            >
              Sign Up
            </button>
            
            <button type="button" className="bg-orange-600 rounded-lg py-2 px-3 hover:bg-orange-900 ms-5"
            onClick={resetForm}>
              Reset
            </button>
          </div>
            {/* {JSON.stringify(data)} --- this line is used for the showing data on frontend side.*/}  
        </form>
      </div>
    </div>
  );
};

export default SignUp;
