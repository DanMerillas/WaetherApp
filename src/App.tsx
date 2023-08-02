import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import { getLocationName, getWeatherData } from './services/weatherApi';


function App() {

  const [currentWeather, setCurrentWeather] = useState<any>(undefined);
  const [errorMessage, setErrorMessage] = useState<string>('');
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
    getWeatherData(latitude, longitude, setCurrentWeather, setErrorMessage);

    getLocationName(latitude, longitude, setLocation, setErrorMessage);
  }, [latitude, longitude]);

  return (
    <div className="App">
      {currentWeather ?
        <>
        {errorMessage}
          <LeftPanel currentWeather={currentWeather?.current} location={location} enableLocation={enableLocation}/>
          <RightPanel weather={currentWeather} />
        </>
        : <div className="error">{errorMessage}</div>}


    </div>
  );
}

export default App;


