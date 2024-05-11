//  to make the client components then to use client on the top 

"use client";

import UserContext from '@/app/context/userContext';
import { logout } from '@/services/signUpService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';

const CustomNavbar = () => {

    const context=useContext(UserContext);
    const router=useRouter();
    console.log(context);

    async function doLogout(){
      try {

        const result=await logout();
        console.log(result);
        context.setUser(undefined);
        router.push("/")
        
      } catch (error) {
        console.log(error);
        toast.error("Logout error!!");
        
      }
    }

  return (
    <nav className="flex px-3 py-3 h-16 bg-blue-400 justify-between items-center">
      {/* left side start */}
      <div>
        <a href="#!">
          <h1 className="text-xl font-bold">Work Manager</h1>
        </a>
      </div>
      {/* left side end */}

      {/* middle side start */}
      <div>
        <ul className="flex space-x-7 font-medium">
          {context.user && (
            <>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              {/* Link tag is used for not refresh the page when click on Home */}
              <li>
                <Link href={"/add-task"}>Add Task</Link>
              </li>
              <li>
                <Link href={"/show-task"}>Show Task</Link>
              </li>
            </>
          )}

        </ul>
      </div>

      {/* middle side end */}

      {/* right side start */}
      <div>
        <ul className="flex space-x-6 font-medium">
          {context.user && (
            <>
              <li>
                <Link href={"#!"}>{context.user.name}</Link>
              </li>
              <li>
                <button onClick={doLogout}>Logout</button>
              </li>
            </>
          )}
 
          {!context.user && (
            <>
              <li>
                <Link href="/signup"> SignUp</Link>
              </li>
              <li>
                <Link href="/login"> Login</Link>
              </li>
            </>
          )}

        </ul>
      </div>

      {/* right side end */}
    </nav>
  );
}

export default CustomNavbar
