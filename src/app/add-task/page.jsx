"use client";
import React, { useState, useEffect } from "react";
import AddtaskImage from "../assets/addTask.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";
import Loading from "./loading";


// import { connectDb } from "@/helper/db";

// connectDb();

const AddTask = () => {

  useEffect(() => {
    document.title = "Add Task : Work Manager"
    
  }, []);
  
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "6638855d37a5d06fad4e67ec",
  });

  const HandleAddTask = async (event) => {
    event.preventDefault(); // to stop the default behavior of the event.

    //  Validate Add task data

    try {
      const result = await addTask(task); // addTask function is used for the call import { addTask } from "@/services/taskService";
      console.log(result);
      {
        /** this is showing messages to the users. */
      }
      toast.success("Your Task is Added.", {
        position: "top-center",
      });

      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to add task.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="border col-span-6 col-start-4 shadow-sm shadow-gray-200 p-5">
        <div className="flex justify-center">
          <Image
            src={AddtaskImage}
            style={{
              width: "50%",
            }}
            alt="Task Banner"
          />
        </div>
        <h1 className="text-2xl font-semibold text-center mt-2">
          Add your Task Here{" "}
        </h1>

        {/* start form */}

        <form action="#!" onSubmit={HandleAddTask} >
          {/* Task title  */}
          <div className="mt-4">
            <label htmlFor="tast_title" className="block font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full p-2.5 rounded-lg focus:ring-red-300 text-xl bg-gray-100 text-black"
              id="task_title"
              name="task_title"
              // here is writen function for the storing data into the database.
              onChange={(event) => {
                setTask({
                  ...task, // ...task is used for add all previous data in the array.
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>

          {/* Task content  */}
          <div className="mt-4">
            <label htmlFor="tast_content" className="block font-medium mb-2">
              Content
            </label>
            <textarea
              className="w-full p-2.5 rounded-lg focus:ring-red-300 text-xl bg-gray-100 text-black"
              id="task_content"
              rows={4}
              name="task_content"
              // here is writen function for the storing data into the database.
              onChange={(event) => {
                setTask({
                  ...task, // ...task is used for add all previous data in the array.
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>

          {/* Task Status */}
          <div className="mt-4">
            <label htmlFor="task_status" className="block font-medium mb-2">
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-2.5 rounded-lg focus:ring-red-300 text-xl bg-gray-100 text-black"
              name="task_status"
              // here is writen function for the storing data into the database.
              onChange={(event) => {
                setTask({
                  ...task, // ...task is used for add all previous data in the array.
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* buttons */}
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 rounded-lg py-2 px-3 hover:bg-blue-900"
            >
              Add Task
            </button>
            {isLoading && <Loading />}
            <button className="bg-red-600 rounded-lg py-2 px-3 hover:bg-red-900 ms-5">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
