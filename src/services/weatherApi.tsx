export function getLocationName(latitude: number, longitude: number, setLocation: React.Dispatch<any>) {
    const urlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=es&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`;
    fetch(urlLocation)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLocation(data.name);
      });
  }
  
  export function getWeatherData(latitude: number, longitude: number, setCurrentWeather: React.Dispatch<any>) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&lang=es&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCurrentWeather(data);
      });
  }