//  to make the client components then to use client on the top 

"use client";

import UserContext from '@/app/context/userContext';
import Link from 'next/link';
import React, { useContext } from 'react'

const CustomNavbar = () => {

    const context=useContext(UserContext);
    console.log(context);

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
                <a href="/logout">Logout</a>
              </li>
            </>
          )}
 
          {!context.user && (
            <>
              <li>
                <Link href="/signup"> SignUp</Link>
              </li>
              <li>
                <a href="/login"> Login</a>
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
