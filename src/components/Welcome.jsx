import React, { useEffect, useState } from "react";
import Form from "./Form";
import axios from "axios";

const Welcome = () => {

  let [weatherData, setWeatherData] = useState({}); 

  const getData = (cityName) => {
    console.log(cityName);
    // setWeatherData([]);
    fetchWeatherData(cityName);
    console.log(weatherData);
    // setWeatherData([...weatherData]);
  };

  useEffect(() => {
    fetchWeatherData("Karachi");
  }, []);

  const fetchWeatherData = async (cityName) => {
    // setWeatherData([])
    const apikey = `ed9762be5575457144a931c00af77267`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;
    const response = await axios.get(url);
    setWeatherData(response.data);
  };

  console.log(weatherData);

  return (
    <div className="h-[450px] shadow-2xl shadow-slate-700 w-[700px] rounded-xl mt-[40px]">
      <Form getData={getData} />
      {
        weatherData.length === 0 ? <h1>Loading...</h1> : <h1>Data Fetched</h1> 
      }

    </div>
  );
};

export default Welcome;
