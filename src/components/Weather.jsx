import React from 'react';

const Weather = ({ weatherData }) => {
  return (
    <div>
      {weatherData.weather ? (
 <div className="center md:container md:mx-auto inset-0 bg-black opacity-50 z-10 shadow-black rounded-xl m-auto relative px-6 top-[10%]">
          <div className="flex flex-col sm:flex-row justify-between w-full h-full">
            <div className="w-full sm:w-1/2 my-4 sm:my-0 mx-auto sm:mx-0 flex-justify-between items-center">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className='text-5xl font-bold mt-4 text-yellow-100'>
                    {weatherData.name},
                    {weatherData.sys.country}
                  </p>
                  <p className='text-sm text-yellow-100'>
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <div>
                  <h1 className='text-6xl font-semibold mb-24 text-yellow-100'>
                    {weatherData.main.temp.toFixed()} °C
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-between items-end ">
              <div className="relative mx-auto mr-2">
                {/* Render the weather icon*/}
                {weatherData.weather[0].icon && (
                  <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" className="w-[120px]" />
                )}
              </div>
              {weatherData.name !== undefined ? (
                <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto sm:mx-0 text-xs ">
                  <div className="flex-justify-between gap-x-8">
                    <p className="font-bold text-yellow-100">Feels Like</p>
                    <p className="font-bold w-20 text-yellow-100">
                      {weatherData.main.feels_like.toFixed()} °C
                    </p>
                  </div>
                  <div className="flex-justify-between gap-x-8 font-bold text-yellow-100">
                    <p>Humidity</p>
                    <p className="font-bold w-20 ">
                      {weatherData.main.humidity} %
                    </p>
                  </div>
                  <div className="flex-justify-between gap-x-8 font-bold text-yellow-100">
                    <p>Wind Speed</p>
                    <p className="font-bold w-20">
                      {weatherData.wind.speed.toFixed()} KPH
                    </p>
                  </div>
                  <div className="flex-justify-between gap-x-8 font-bold text-yellow-100">
                    <p>Pressure</p>
                    <p className="font-bold w-20">
                      {weatherData.main.pressure} hPa
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
