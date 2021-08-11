import { useSelector } from "react-redux";

const Data = () => {
  const state = useSelector((state) => state.copyReducer);
  console.log(state);
  return (
    <div className="data">
      <h1>DATA</h1>
      <div className="username">
        <b>Username: </b>
        {state.username}
      </div>
      <div className="email">
        <b>Email: </b>
        {state.email}
      </div>
    </div>
  );
};

export default Data;
