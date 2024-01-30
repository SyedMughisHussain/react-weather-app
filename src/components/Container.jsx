import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const Container = (props) => {
  return (
    <div className="mt-3">
      <h1 className="text-center text-[30px] font-bold">
        {props.cityName}, {props.countryName}{" "}
      </h1>
      <p className="text-center text-[20px] italic mt-2">{props.date}</p>
      <p className="text-center text-[50px] font-bold mt-2">
        {props.temperature}°C
      </p>
      <p className="text-center text-[25px] text-pink-500 mt-2">
        {props.weatherType}
      </p>
      <div className="flex justify-around">
        <div className="flex">
          <ReactAnimatedWeather icon="WIND" size={50} />
          <div>
            <p className="text-[20px] font-bold">{props.windSpeed}m/s</p>
            <p className="text-[20px] font-bold">Wind Spedd</p>
          </div>
        </div>
        <div className="flex">
          <ReactAnimatedWeather icon="RAIN" size={50} />
          <div>
            <p className="text-[20px] font-bold">{props.humidity}%</p>
            <p className="text-[20px] font-bold">Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
