import React, { useEffect, useState } from 'react';
import "./styles.css"
import Header from "./components/Header";
import InputCity from './components/InputCity';
import ShowWeather from './components/ShowWeather';

const App = () => {
  const [weatherData, setWeatherData] = useState("");
  const [inputCity, setInputCity] = useState("Seattle");
  const [cityName, setCityName] = useState("Seattle");
  const [error, setError] = useState(false);

  const inputHandler = (e) => {
    setInputCity(e.target.value)
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setError(false);
    setCityName(inputCity);
  };

  useEffect(() => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7baf2fd950cd4bad1645f679c7af87a8`;

    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      if (data.cod === "404") {
        setError(true);
      } else {
        setWeatherData(data);
      }
    };

    fetchData();
  }, [cityName]);


  return (
    <div>
      <Header />
      <InputCity
        city={inputCity}
        onInputHandler={inputHandler}
        onSubmitHandler={onSubmitHandler}
      />
      {error ? (<h3 className="error">No data found :( </h3>)
        : (
          <ShowWeather data={weatherData} />
        )}
    </div>
  )
}

export default App;