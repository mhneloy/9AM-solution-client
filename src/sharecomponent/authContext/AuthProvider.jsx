import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //loading
  const [loading, setLoading] = useState(true);

  //login user
  const loginUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  //google login
  const googleprovider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleprovider);
  };

  // on aut state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        setLoading(false);
        console.log(userInfo);
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    loginUser,
    googleLogin,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
