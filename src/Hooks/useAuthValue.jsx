import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const useAuthValue = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuthValue;
