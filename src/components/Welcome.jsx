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
    };
    getData();
  }, []);

  const fetchWeatherData = async (cityName) => {
    const apikey = `ed9762be5575457144a931c00af77267`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;
    const response = await axios.get(url);
    setWeatherData(response.data);
    return response.data;
  };

  function formatDate(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
  
    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  }
  
  // Example usage:
  const currentDate = new Date(); // Get the current date
  const formattedDate = formatDate(currentDate);
  console.log(formattedDate); // Output: Tuesday, January 30, 2024
  

  console.log(weatherData);

  return (
    <div className="h-[450px] shadow-2xl shadow-slate-700 w-[700px] rounded-xl mt-[40px]">
      <Form getData={getData} />
      {weatherData === null ? (
        <h1 className="font-bold text-[30px] text-center mt-[50px]">Loading..</h1>
      ) : (
        <Container
          cityName={weatherData.name}
          countryName={weatherData.sys.country}
          date={formattedDate}
          temperature={weatherData.main.temp}
          weatherType={weatherData.weather[0].main}
        />
      )}
    </div>
  );
};

export default Welcome;
