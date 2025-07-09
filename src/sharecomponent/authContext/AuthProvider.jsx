import { createContext, useState } from "react";
import { auth } from "../firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";

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

  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    loginUser,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
