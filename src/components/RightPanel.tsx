
import NextDaysCards from "./NextDaysCards";
import TodayHightLightsPanel from "./TodayHightLightsPanel";


export default function RightPanel(props: { weather: any; currentWeather: any; setUnit:any; unit:string }) {

    const handlerChangeUnit = (unit:string) => {
        props.setUnit(unit);
    }

    return (
        <>
            <article className="App-right">
            <div className="unit-circle">
                <div className="App-weather-days">
                    <div className="App-round-circle selected" style={{ marginRight: '10px' }} onClick={()=>handlerChangeUnit('Metric')}><span className="unit">ºC</span></div>
                    <div className="App-round-circle" onClick={()=>handlerChangeUnit('Imperial')}><span className="unit">ºF</span></div>
                </div>
            </div>
                <NextDaysCards weather={props.weather} unit={props.unit}/>
                <TodayHightLightsPanel weather={props.currentWeather} unit={props.unit}/>
            </article>
        </>
    );
}