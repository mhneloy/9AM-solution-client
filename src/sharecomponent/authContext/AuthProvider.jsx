import { createContext, useState } from "react";
import { auth } from "../firebase.init";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
