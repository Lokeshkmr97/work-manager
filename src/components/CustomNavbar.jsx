//  to make the client components then to use client on the top 

"use client";

import Link from 'next/link';
import React from 'react'

const CustomNavbar = () => {
  return (
    <nav className='flex px-3 py-3 h-16 bg-blue-400 justify-between items-center'>
    {/* left side start */}
       <div>
        <a href="#!"><h1 className='text-xl font-bold'>Work Manager</h1></a>
       </div>
    {/* left side end */}

    {/* middle side start */}
       <div>
        <ul className='flex space-x-7 font-medium'>
            <li>
                <Link href={'/'}>Home</Link>
            </li> {/* Link tag is used for not refresh the page when click on Home */}
            <li>
                <Link href={'/add-task'}>Add Task</Link>
            </li>
            <li>
                <Link href={'/show-task'}>Show Task</Link>
            </li>
        </ul>
       </div>

    {/* middle side end */} 

    {/* right side start */}
       <div>
        <ul className='flex space-x-6 font-medium'>
            <li><Link href="/signup"> SignUp</Link></li>
            <li><a href="/login"> Login</a></li>
        </ul>
       </div>

    {/* right side end */}
    </nav>
  )
}

export default CustomNavbar
