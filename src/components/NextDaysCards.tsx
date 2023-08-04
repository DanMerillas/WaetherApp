import weatherImage from "../commons/weatherImage";


export default function NextDaysCards(props: { weather: any; unit: string }) {

    let min_temp = 0
    let max_temp = 0
    let newDay = true;

    return (
        <>


            <div className="App-weather-days">

                {
                    props.weather?.list.map((day: any, index: number) => {

                        if (newDay) {
                            min_temp = day.main.temp_min.toFixed(0)
                            max_temp = day.main.temp_max.toFixed(0)
                        }

                        if(min_temp > day.main.temp_min.toFixed(0))
                            min_temp = day.main.temp_min.toFixed(0);

                        if(max_temp < day.main.temp_max.toFixed(0))
                            max_temp = day.main.temp_max.toFixed(0);
                        
                        if (day.dt_txt.indexOf('21:00:00') !== -1) {
                            newDay = true;

                            return <div className='App-weather-day' key={day.dt}>
                                <div className='App-weather-date'>{new Date(day.dt * 1000).toLocaleDateString()}</div>
                                <div>
                                    <img className='App-weather-small-image' src={weatherImage(day.weather[0].main)} alt='weather' />
                                </div>
                                <div className='App-weather-date temperature'>{min_temp} {props.unit === "Metric" ? "Cº" : "Fº"}</div>
                                <div className='App-weather-date temperature'>{max_temp} {props.unit === "Metric" ? "Cº" : "Fº"}</div>
                            </div>
                        }
                        else {
                            newDay = false;
                            return ''
                        }
                    })
                }

            </div>
        </>
    );
}