import Data from "./Data";
import { useDispatch } from "react-redux";
import { copyUsername, copyEmail } from "./actions/index";
import "./StyleDay26.css";
const AppDay26 = () => {
  const dispatch = useDispatch();
  return (
    <div className="app-day-26">
      <div className="inputs">
        <h1>INPUT</h1>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            dispatch(copyUsername(e.target.value));
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            dispatch(copyEmail(e.target.value));
          }}
        />
      </div>

      <Data />
    </div>
  );
};
export default AppDay26;
