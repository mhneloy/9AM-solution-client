import { useContext } from "react";
import { authContext } from "./authContext/AuthProvider";

const useCustomContext = () => {
  const context = useContext(authContext);
  return context;
};

export default useCustomContext;
