/* eslint-disable react-hooks/exhaustive-deps */
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
  const [location, setLocation] = useState<any>(undefined);
  const [latitude, setLatitude] = useState(40.484390);
  const [longitude, setLongitude] = useState(-3.368802);
  const [unit, setUnit] = useState<string>('Metric');

  useEffect(() => {

    fetchData()

  }, [latitude, longitude]);

  useEffect(() => {

    fetchData()

  }, [unit]);

  const fetchData: any = async (city:any = undefined) => {
    if (latitude === 0 || longitude === 0) return;

    const resultWeather = await getWeatherData(latitude, longitude, city, unit);

    if (resultWeather.cod && resultWeather.cod !== '200') {
      setErrorMessage('Could not get weather information');
    }
    else {
      setCurrentWeather(resultWeather);
    }


    const resultLocationWeather = await getLocationName(latitude, longitude, city, unit);
    if (resultLocationWeather.cod && resultLocationWeather.cod !== 200) {
      setErrorLocationMessage('Could not get weather information');
    }
    else {
      setLocation(resultLocationWeather);
      console.log(resultLocationWeather);
    }


  }



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
    fetchData(city)


  }

  return (
    <div className="App">
      {currentWeather && location ?
        <>

          <LeftPanel currentWeather={location} location={location.name} enableLocation={enableLocation} hanlerSearch={handlerSearch} unit={unit}/>
          <RightPanel weather={currentWeather} currentWeather={location} setUnit={setUnit} unit={unit}/>
        </>
        : errorLocationMessage !== '' ? 
          <div className="error">{errorMessage}</div> : ''
        }


    </div>
  );
}

export default App;


