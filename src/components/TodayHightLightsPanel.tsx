export default function TodayHightLightsPanel(props: { weather: any }) {

   
    return (
        <>
            

                <h3 className='App-weather-title'>Today’s Hightlights</h3>

                <div className="App-weather-days">
                    <div className='App-weather-hightlights'>
                        <div>Wind status</div>
                        <div>{props.weather?.current.wind_speed} <span>mph</span></div>
                    </div>
                    <div className='App-weather-hightlights'>
                        <div>Humidity</div>
                        <div>{props.weather?.current.humidity} <span>%</span></div>
                    </div>

                </div>

                <div className="App-weather-days">
                    <div className='App-weather-hightlights'>
                        <div>Visibility</div>
                        <div>{props.weather?.current.visibility} <span>miles</span></div>
                    </div>
                    <div className='App-weather-hightlights'>
                        <div>Air Pressure</div>
                        <div>{props.weather?.current.pressure} <span>mb</span></div>
                    </div>

                </div>
        </>
    );
}