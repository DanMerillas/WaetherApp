import weatherImage from "../commons/weatherImage";


export default function NextDaysCards(props: { weather: any }) {

   
    return (
       

                <div className="App-weather-days">
                    {
                        props.weather?.daily.map((day: any, index: number) => {
                            if (index > 0 && index < 6) {
                                return <div className='App-weather-day' key={day.dt}>
                                    <div className='App-weather-date'>{new Date(day.dt * 1000).toLocaleDateString()}</div>
                                    <div>
                                        <img className='App-weather-small-image' src={weatherImage(day.weather[0].main)} alt='weather' />
                                    </div>
                                    <div>{day.temp.min} Cº</div>
                                    <div>{day.temp.max} Cº</div>
                                </div>
                            }
                            else {
                                return ''
                            }
                        })
                    }

                </div>
                
    );
}