import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import weatherImage from './commons/weatherImage';
import RightPanel from './components/RightPanel';


function App() {

  const [currentWeather, setCurrentWeather] = useState<any>(undefined);
  const [location, setLocation] = useState<any>('');
  const [latitude, setLatitude] = useState(40.484390);
  const [longitude, setLongitude] = useState(-3.368802);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    }

  }, []);

  useEffect(() => {
    if (latitude === 0 || longitude === 0) return;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&lang=es&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCurrentWeather(data);
      })

      const urlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=es&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`;
    fetch(urlLocation)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLocation(data.name);
      })
  }, [latitude, longitude]);

  return (
    <div className="App">
      {currentWeather ?
        <>
          <LeftPanel currentWeather={currentWeather?.current} location={location}/>
          <RightPanel weather={currentWeather} />
        </>
        : ''}


    </div>
  );
}

export default App;
