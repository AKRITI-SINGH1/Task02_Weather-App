import { useState, useEffect } from "react";
import './App.css'
import axios from 'axios';
import Weather from "./components/Weather";

function App() {

  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "d438021c464764e48d5fab213c591a2a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          setWeatherData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
      setLocation("");
    }
  }

  return (
    <div className="bg-cover bg-center min-h-screen md:bg-contain md:bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1548567117-02328f050eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
    <div className="min-h-screen flex flex-col justify-start items-center py-8 px-4 ">
      <div className="text-center mb-20">
        <input
          type="text"
          className="py-3 px-6 w-full sm:w-[400px] text-lg rounded-3xl
          border border-gray-200 text-black font-extrabold italic placeholder:text-gray-400 focus:outline-none
          bg-white/100 shadow-neutral-800"
          placeholder="Enter Your Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData={weatherData} />
    </div>
</div>

  );
}

export default App;
