"use client";
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='flex px-3 py-3 h-40 bg-gray-700 mt-5'>
        <div className='flex'>
            <div className='text-center w-[50%]'>
                <h1 className='text-3xl font-semibold'>Welcome to work Manager</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias quo nesciunt nam voluptatum tenetur eligendi esse deserunt incidunt itaque officia cumque assumenda sequi, harum doloremque modi nisi quibusdam tempora. </p>
            </div>

            <div className='w-[50%] text-right mr-8'>
                <h1 className='text-2xl font-semibold'>Important Links</h1>
                <ul>
                    <li>
                        <a href="#!">Facebook</a>
                    </li>
                    <li>
                        <a href="#!">Instagram</a>
                    </li>
                    <li>
                        <a href="#!">Twitter</a>
                    </li>
                </ul>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
