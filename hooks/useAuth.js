import React, { useState, useEffect } from "react";
import firebase from "../firebase";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubcribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubcribe();
  }, []);

  return currentUser;
};

export default useAuth;
