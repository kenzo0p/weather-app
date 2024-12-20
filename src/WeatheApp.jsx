import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    feelsLike: 24.84,
    temp: 25.1,
    tempMax: 25.1,
    tempMin: 25.1,
    weather: "overcast clouds",
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  }
  return (
    <div style={{ textAlign: "center" }}>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
