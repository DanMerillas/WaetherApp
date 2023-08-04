
export function UnitSwitch(props: { setUnit:any; unit:string }){

    const handlerChangeUnit = (unit:string) => {
        props.setUnit(unit);
    }

    return <div className="unit-circle">
                <div className="App-weather-days">
                    <div className={`App-round-circle ${props.unit==='Metric'? 'selected' : ''}`} style={{ marginRight: '10px' }} onClick={()=>handlerChangeUnit('Metric')}><span className="unit">ºC</span></div>
                    <div className={`App-round-circle ${props.unit==='Imperial'? 'selected' : ''}`} onClick={()=>handlerChangeUnit('Imperial')}><span className="unit">ºF</span></div>
                    
                </div>
            </div>
}