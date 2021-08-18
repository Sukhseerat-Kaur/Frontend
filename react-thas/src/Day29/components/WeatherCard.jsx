import React from "react";
import { useSelector } from "react-redux";

const WeatherCard = () => {
  const placeData = useSelector((state) => state.placeData);
  return (
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
  );
};

export default WeatherCard;
