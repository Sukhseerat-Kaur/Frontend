import { useContext } from "react";
import { LoginDetail } from "./Authentication";
function Profile() {
  const logger = useContext(LoginDetail);
  return (
    <div className="profile page">
      {logger.isLoggedIn ? (
        <div>
          <h1>Profile: Private Route</h1>
          <h3>Hey user, you are logged in</h3>
        </div>
      ) : (
        <h1>Dashboard</h1>
      )}
    </div>
  );
}

export default Profile;
