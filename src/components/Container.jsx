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
          <ReactAnimatedWeather icon="RAIN" size="40" />
          <p>HEllow</p>
        </div>
        <div className="flex">
          <ReactAnimatedWeather icon="WIND" size="40" />
          <p>Word</p>
        </div>
      </div>
    </div>
  );
};

export default Container;
