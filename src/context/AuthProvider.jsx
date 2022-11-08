import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // google provider
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const userInfo = { user,  signInWithGoogle };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
