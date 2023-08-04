
import NextDaysCards from "./NextDaysCards";
import TodayHightLightsPanel from "./TodayHightLightsPanel";
import { UnitSwitch } from "./UnitSwitch";


export default function RightPanel(props: { weather: any; currentWeather: any; setUnit: any; unit: string }) {

    const handlerChangeUnit = (unit: string) => {
        props.setUnit(unit);
    }

    return (
        <>
            <article className="App-right">
                <UnitSwitch setUnit={handlerChangeUnit} unit={props.unit} />
                <NextDaysCards weather={props.weather} unit={props.unit} />
                <TodayHightLightsPanel weather={props.currentWeather} unit={props.unit} />
            </article>
        </>
    );
}