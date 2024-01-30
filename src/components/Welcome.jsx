import React, { useEffect, useState } from "react";
import Form from "./Form";
import axios from "axios";
import Container from "./Container";

const Welcome = () => {

  const [weatherData, setWeatherData] = useState(null); 

  const getData = (cityName) => {
    console.log(cityName);
    fetchWeatherData(cityName);
    console.log(weatherData);
  };

  useEffect(() => {
    const getData = async () => {
    const weather = await fetchWeatherData("Karachi");
    setWeatherData(weather);
    }
    getData();
  }, []);

  const fetchWeatherData = async (cityName) => {
    const apikey = `ed9762be5575457144a931c00af77267`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;
    const response = await axios.get(url);
    setWeatherData(response.data);
    return response.data;
  };

  console.log(weatherData);

  return (
    <div className="h-[450px] shadow-2xl shadow-slate-700 w-[700px] rounded-xl mt-[40px]">
      <Form getData={getData} />
      { weatherData === null ? <h1>Loading..</h1> : <Container />} 
    </div>
  );
};

export default Welcome;
