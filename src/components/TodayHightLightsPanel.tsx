export default function TodayHightLightsPanel(props: { weather: any }) {

    const milesInAMeter = 0.000621371;
    const metersTomiles = (props.weather?.current.visibility * milesInAMeter).toFixed(2);
    return (
        <>


            <h3 className='App-weather-title'>Today’s Hightlights</h3>

            <div className="App-weather-days">
                <div className='App-weather-hightlights big'>
                    <div className="App-weather-hightlights-title">Wind status</div>
                    <div className="App-weather-hightlights-value">{props.weather?.current.wind_speed} <span className="App-weather-hightlights-unit">mph</span></div>
                    <div>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_98)">
                                <path d="M8.01348 17.2203L9.61278 5.38071C9.70167 4.72534 10.5505 4.5087 10.9377 5.04729L13.4776 8.52307C13.603 8.68917 13.7882 8.79609 13.9948 8.8217L18.2749 9.28342C18.9312 9.35586 19.1717 10.1929 18.6486 10.5975L9.19484 17.9023C8.67811 18.3107 7.92459 17.8757 8.01348 17.2203Z" fill="#E7E7EB" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_98">
                                    <rect width="17.6966" height="17.6966" fill="white" transform="translate(15.6997 24.7079) rotate(-150)" />
                                </clipPath>
                            </defs>
                        </svg>
                        

                    </div><span>WSW</span>
                </div>
                <div className='App-weather-hightlights big'>
                    <div className="App-weather-hightlights-title">Humidity</div>
                    <div className="App-weather-hightlights-value">{props.weather?.current.humidity} <span className="App-weather-hightlights-unit">%</span></div>
                    
                        <div className="App-weather-hightlights-bar"><div className="App-weather-hightlights-bar percent" style={{width: props.weather?.current.humidity + '%'}}></div></div>
                        
                   
                    
                </div>

            </div>

            <div className="App-weather-days">
                <div className='App-weather-hightlights small'>
                    <div className="App-weather-hightlights-title">Visibility</div>
                    <div className="App-weather-hightlights-value">{metersTomiles} <span className="App-weather-hightlights-unit">miles</span></div>
                </div>
                <div className='App-weather-hightlights  small'>
                    <div className="App-weather-hightlights-title">Air Pressure</div>
                    <div className="App-weather-hightlights-value">{props.weather?.current.pressure} <span className="App-weather-hightlights-unit">mb</span></div>
                </div>

            </div>
        </>
    );
}