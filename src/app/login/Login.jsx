"use client";
import React, { useState } from "react";
import LoginUser from "../assets/loginUser.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { login } from "@/services/signUpService";
import { useRouter } from "next/navigation";

const Login = () => {

  const router=useRouter();

  const [loginData,setLoginData]=useState({
    email:"",
    password:"",
  })

  const loginFormSubmitHandler=async (event)=>{
    event.preventDefault();

    try {
      //  check validation of the data.
      if(loginData.email.trim()==="" || loginData.password.trim()===""){
          toast.info("Invalid Username or Password !!",{
            position:"top-center"
          });
          return;
      }

      const result = await login(loginData);
      console.log(result)
      toast.success("Logged In",{
        position:"top-center",
      })

      // redirect the page after login user.
      router.push("/profile/users")


      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message,{
        position:"top-center"
      })
      
    }

  }



  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="border col-span-4 col-start-5 shadow-sm shadow-gray-200 p-5">
        <div className="flex justify-center m-3">
          <Image
            src={LoginUser}
            style={{
              width: "35%",
            }}
            alt="Login Svg"
          />
        </div>
        <div className="">
          <h1 className="text-3xl text-center text-blue-500 font-semibold">
            Login
          </h1>
        </div>
        <form action="#!" onSubmit={loginFormSubmitHandler}>
          {/* user name field  */}
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
                setLoginData({
                  ...loginData, // ...data is used for add all previous data in the array.
                  email: event.target.value,
                });
              }}
              value={loginData.email}
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
                setLoginData({
                  ...loginData, // ...task is used for add all previous data in the array.
                  password: event.target.value,
                });
              }}
              value={loginData.password}
            />
          </div>
          {/* buttons */}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 rounded-lg py-2 px-3 hover:bg-blue-900"
            >
              Login
            </button>

            <button
              type="button"
              className="bg-orange-600 rounded-lg py-2 px-3 hover:bg-orange-900 ms-5"
              // onClick={resetForm}
            >
              Reset
            </button>
          </div>

          {/* {JSON.stringify(data)} --- this line is used for the showing data on frontend side.*/}
        </form>
      </div>
    </div>
  );
};

export default Login;
