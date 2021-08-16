import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./StyleDay28.css";
import { useEffect, useState } from "react";

const AppDay28 = () => {
  const [city, setCity] = useState("Amritsar");
  const [placeData, setPlaceData] = useState(null);
  const updataPlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=dae9b6da211246ffbbf84549211608&q=${city}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlaceData(data);
      });
  };
  useEffect(() => {
    updataPlaceData();
  }, []);
  if (!placeData) {
    return <div>loading</div>;
  }
  return (
    <div className="App">
      <div className="main">
        <div className="search-box ">
          <input
            type="text"
            placeholder="Search City.."
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button className="btn" onClick={updataPlaceData}>
            Submit
          </button>
        </div>

        <div className="weather-box">
          <div className="card-box">
            {placeData.location ? (
              <div
                className={
                  placeData.current.temp_c < 25 ? "container" : "container warm"
                }
              >
                <img src={placeData.current.condition.icon} alt="icon" />
                <div className="temperature">{placeData.current.temp_c}°</div>
                <div className="location">{placeData.location.name}</div>
                <div className="country">{placeData.location.country}</div>
                <div className="properties">
                  <div className="col">
                    <div className="title">Wind Now</div>
                    <div className="data">
                      {placeData.current.wind_kph}
                      <span className="unit">km</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="title">Humidity</div>
                    <div className="data">
                      {placeData.current.humidity}
                      <span className="unit">%</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="title">Precipitation</div>
                    <div className="data">
                      {placeData.current.precip_in}
                      <span className="unit">%</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h2>Place Not Found</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDay28;
