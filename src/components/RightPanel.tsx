
import NextDaysCards from "./NextDaysCards";
import TodayHightLightsPanel from "./TodayHightLightsPanel";


export default function RightPanel(props: { weather: any }) {


    return (
        <>
            <article className="App-right">
                <NextDaysCards weather={props.weather} />
                <TodayHightLightsPanel weather={props.weather} />
            </article>
        </>
    );
}