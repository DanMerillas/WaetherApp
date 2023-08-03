import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import { getLocationName, getWeatherData } from './services/weatherApi';


function App() {

  const [currentWeather, setCurrentWeather] = useState<any>(undefined);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorLocationMessage, setErrorLocationMessage] = useState<string>('');
  const [location, setLocation] = useState<any>('');
  const [latitude, setLatitude] = useState(40.484390);
  const [longitude, setLongitude] = useState(-3.368802);


  useEffect(() => {
    if (latitude === 0 || longitude === 0) return;
    getWeatherData(latitude, longitude, setCurrentWeather, setErrorMessage);

    getLocationName(latitude, longitude, setLocation, setErrorLocationMessage);
  }, [latitude, longitude]);


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


  const handlerSearch = (city: string) => {
    getWeatherData(0, 0, setCurrentWeather, setErrorMessage, city);
    getLocationName(0, 0, setLocation, setErrorLocationMessage, city);

    if (errorLocationMessage === ''){
      alert('City not found')
    }
  }

  return (
    <div className="App">
      {currentWeather ?
        <>
          {errorMessage}
          <LeftPanel currentWeather={currentWeather?.current} location={location.name} enableLocation={enableLocation} hanlerSearch={handlerSearch} />
          <RightPanel weather={currentWeather} />
        </>
        : <>
          <LeftPanel currentWeather={currentWeather ? currentWeather.current : location} location={location.name} enableLocation={enableLocation} hanlerSearch={handlerSearch} />
          <div className="error">{errorMessage}</div>
        </>}


    </div>
  );
}

export default App;


