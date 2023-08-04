import { useState } from "react";
import weatherImage from "../commons/weatherImage";


export default function LeftPanel(props: { currentWeather: any; location: string; enableLocation: any; hanlerSearch: any; unit:string}) {

    const currentDate = new Date();
    const [viewSearhBox, setViewSearchBox] = useState(false);
    const [textToSearch, setTextToSearch] = useState('');

    const handlerSearch = () => {
        props.hanlerSearch(textToSearch);
        setTextToSearch('')
    }

    const handlerEnableLocation = () => {
        props.enableLocation()
        setViewSearchBox(false)
        setTextToSearch('')
    }


    return (
        <>
            {props.currentWeather ? <article className="App-left">
                
                <div style={{ display: viewSearhBox ? 'flex' : 'none' }} className="App-weather-location-search-control">
                    <input className="app-input-search" type="text" placeholder="Search location" value={textToSearch} onChange={(value)=>setTextToSearch(value.target.value)} onKeyUp={(event)=>{
                        if (event.key === 'Enter') {
                            handlerSearch()
                        }
                    }}/>
                    <button className="app-button-search" type="button" onClick={()=>handlerSearch()}>Search</button>
                </div>
                <div style={{ display: !viewSearhBox ? 'flex' : 'none' }} className="App-weather-location-search-control">
                    <button className="app-button-search-place" type="button" onClick={()=>setViewSearchBox(true)}>Seach for places</button>
                </div>
                <div className="App-weather-location-control" onClick={() => handlerEnableLocation()} title="Obtener ubicación actual">
                    <div className="App-round-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_29)">
                            <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C6.83 3.52 3.52 6.83 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.52 17.17 6.83 20.48 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C17.17 20.48 20.48 17.17 20.94 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="#E7E7EB" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_29">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    </div>
                    
                </div>
                <div className='App-weather'>
                    <img src={props.currentWeather?.weather && props.currentWeather.weather.length > 0 ? weatherImage(props.currentWeather.weather[0].main) : ''} alt='weather' />

                </div>
                <div className='App-weather App-number'>
                    {props.currentWeather.temp ? Math.round(props.currentWeather.temp): `${Math.round(props.currentWeather.main.temp)} ${props.unit === "Metric" ? "Cº": "Fº"}`}
                </div>
                <div className='App-weather App-status'>
                    {props.currentWeather?.weather && props.currentWeather.weather.length > 0 ? props.currentWeather.weather[0].description.replace(/^\w/, (c: string) => c.toUpperCase()) : ''}
                </div>
                <div className='App-weather'>
                    
                    <div className='App-weather-date' style={{color:'#88869D'}}>{currentDate.toLocaleDateString()}</div>
                </div>
                <div className='App-weather App-location'>
                    {props.location}
                </div>
            </article> : ''}
        </>
    );
}