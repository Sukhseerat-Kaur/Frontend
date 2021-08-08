import { createContext, useState } from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

const LoginDetail = createContext();

function Authentication({ children }) {
  const [isLoggedIn, toggleLog] = useState(false);

  const logger = {
    isLoggedIn,
    login: () => {
      toggleLog(true);
    },
    logout: () => {
      toggleLog(false);
    },
  };

  return <LoginDetail.Provider value={logger}>{children}</LoginDetail.Provider>;
}

export default Authentication;
export { LoginDetail };
