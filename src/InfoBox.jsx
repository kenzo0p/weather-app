import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { AcUnit, LocationCity, Thunderstorm, WbSunny } from "@mui/icons-material";
import "./InfoBox.css"

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1553586635-60aba8bfda8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1718917910629-55b5f8f7bd08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  return (
    <div className="InfoBox">
      <h1>Weather Info - {info.weather}</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity > 80 ? <Thunderstorm/> : info.temp > 15 ? <WbSunny/> : <AcUnit/>}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Min Temprature = {info.tempMin}&deg;C</p>
            <p>Max Temprature = {info.tempMax}&deg;C</p>
            <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
