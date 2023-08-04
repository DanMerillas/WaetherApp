export async function getLocationName(latitude: number, longitude: number, city: string, unit:string) {


    let urlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=en&units=${unit}&appid=${process.env.REACT_APP_WT_AP_KEY}`;

    if(city){
      urlLocation = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=${unit}&appid=${process.env.REACT_APP_WT_AP_KEY}`;
    }

    const response = await fetch(urlLocation);
    const data = await response.json();
    return data;

  }
  
  export async function getWeatherData(latitude: number, longitude: number, city: string, unit:string) {

    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=en&units=${unit}&appid=${process.env.REACT_APP_WT_AP_KEY}`;

    if(city){
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=${unit}&appid=${process.env.REACT_APP_WT_AP_KEY}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data;

  }