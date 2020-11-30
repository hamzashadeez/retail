import React, { useState, useEffect, useContext } from "react";
import Flash from "./Screens/Flash";
import Login from "./Screens/Login";
import Main from "./Screens/Home";
import {auth } from "./Config/firebase";
import { UserContext } from "./Context/UserContext";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";


function AppStack() {
    const [user, setUser] = useContext(UserContext)
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          console.log('from appstack ', authUser);
          setUser({isSigned: true})
          console.log(user)
        }else{
            setUser({isSigned: false})
        }
      });
  
      return () => {
        //some clean ups
        unsubscribe();
      };
    }, []);
    return (
        <div>
            {user.isSigned === null ? <Flash /> : user.isSigned ? <HomeStack /> : <AuthStack />}
        </div>
    )
}

export default AppStack

