import React from 'react';
import './App.css';
import raining from './images/Shower.png';

function App() {
  return (
    <div className="App">
      <article className="App-left">
        <div className='App-weather'>
          <img src={raining} alt='weather'/>
        </div>
        <div className='App-weather App-number'>
          15º
        </div>
        <div className='App-weather App-status'>
          Shower
        </div>
        <div className='App-weather'>
          <div className='App-weather-date'>Today</div>
          <div className='App-weather-date'>Fri, 5 Jun</div>
        </div>
        <div className='App-weather App-location'>
          Alcalá de Henares
        </div>
      </article>
      <article className="App-right">
      </article>
    </div>
  );
}

export default App;
