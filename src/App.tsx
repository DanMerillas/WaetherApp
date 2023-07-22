import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import { getLocationName, getWeatherData } from './services/weatherApi';


function App() {

  const [currentWeather, setCurrentWeather] = useState<any>(undefined);
  const [location, setLocation] = useState<any>('');
  const [latitude, setLatitude] = useState(40.484390);
  const [longitude, setLongitude] = useState(-3.368802);

  const enableLocation = () => {
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
  }


  useEffect(() => {
    if (latitude === 0 || longitude === 0) return;
    getWeatherData(latitude, longitude, setCurrentWeather);

    getLocationName(latitude, longitude, setLocation);
  }, [latitude, longitude]);

  return (
    <div className="App">
      {currentWeather ?
        <>
          <LeftPanel currentWeather={currentWeather?.current} location={location} enableLocation={enableLocation}/>
          <RightPanel weather={currentWeather} />
        </>
        : ''}


    </div>
  );
}

export default App;


