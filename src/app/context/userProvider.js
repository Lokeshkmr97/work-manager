"use client";
import React, { useEffect, useState } from "react";
import UserContext from "../../app/context/userContext";
import { toast } from "react-toastify";
import { httpAxios } from "@/helper/httpAxios";
import { currentUser } from "@/services/signUpService";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function load() {
      try {
        const logUser = await currentUser();
        console.log(logUser);
        setUser({ ...logUser });
      } catch (error) {
        console.log(error);
        // toast.error("Error in loading current User.");
        setUser(undefined);
      }
    }
    if(!user){
      load();
    }
    
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
