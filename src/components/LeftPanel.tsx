import weatherImage from "../commons/weatherImage";


export default function LeftPanel(props: { currentWeather: any; location:string }) {

    const currentDate = new Date();
    

    return (
        <>
        {props.currentWeather ? <article className="App-left">
            <div className='App-weather'>
                <img src={props.currentWeather?.weather && props.currentWeather.weather.length > 0 ? weatherImage(props.currentWeather.weather[0].main) : ''} alt='weather' />
                {props.currentWeather.weather[0].main}
            </div>
            <div className='App-weather App-number'>
                {Math.round(props.currentWeather.temp)}º
            </div>
            <div className='App-weather App-status'>
                {props.currentWeather?.weather && props.currentWeather.weather.length > 0 ? props.currentWeather.weather[0].description.replace(/^\w/, (c: string) => c.toUpperCase()):''}
            </div>
            <div className='App-weather'>
                <div className='App-weather-date'>Hoy</div>
                <div className='App-weather-date'>{currentDate.toLocaleDateString()}</div>
            </div>
            <div className='App-weather App-location'>
                {props.location}
            </div>
        </article> : ''}
        </>
    );
}