import React from "react";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";
import "./StyleDay29.css";

const AppDay29 = () => {
  return (
    <div className="app-day-29">
      <div className="main">
        <Form />
        <WeatherCard />
      </div>
    </div>
  );
};

export default AppDay29;
