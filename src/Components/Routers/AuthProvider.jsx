import React, { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../Components/Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
  const googleLogIn = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };
  const newUser =(email, password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const logIn = (email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const authData = {
    user,
    newUser,
    googleLogIn,
    logIn
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
