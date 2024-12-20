import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./SearchBox.css";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error , setError] = useState(false)
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f826b95a34c02116898f82f9128e6bc3";

  let getWeatherInfo = async () => {
   try {
     const response = await fetch(
       `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
     );
     const jRes = await response.json();
     console.log(jRes);
     let result = {
       city: city,
       temp: jRes?.main?.temp,
       tempMin: jRes?.main?.temp_min,
       tempMax: jRes?.main?.temp_max,
       humidity: jRes?.main?.humidity,
       feelsLike: jRes?.main?.feels_like,
       weather: jRes?.weather[0]?.description,
     };
     console.log(result);
     return result ;
   } catch (err) {
        throw err;
   }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)
    } catch (error) {
        setError(true)
    }
  };
  return (
    <div className="SearchBox">
      <h1>Search for any city</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          onChange={handleChange}
          value={city}
          label="City Name"
          variant="outlined"
          required
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No Such Place Exist!</p>}
      </form>
    </div>
  );
}
