import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';


function App() {

  const [currentWeather, setCurrentWeather] = useState<any>(undefined);
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
      if(latitude === 0 || longitude === 0) return;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=es&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCurrentWeather(data);
            })
    }, [latitude, longitude]);

  return (
    <div className="App">
      <LeftPanel currentWeather={currentWeather}/>
      <article className="App-right">
      </article>
    </div>
  );
}

export default App;
