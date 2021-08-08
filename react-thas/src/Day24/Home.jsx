import { useContext } from "react";
import { LoginDetail } from "./Authentication";

function Home() {
  const logger = useContext(LoginDetail);
  console.log(logger);
  return (
    <div className="home page">
      <h1>Home</h1>

      <h3 className={logger.isLoggedIn ? "green" : "red"}>
        {logger.isLoggedIn
          ? "Hey user, you are logged in"
          : "Login to access Profile and Dashboard"}
      </h3>
      <button
        className="login-button"
        onClick={() => (logger.isLoggedIn ? logger.logout() : logger.login())}
      >
        {logger.isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Home;
