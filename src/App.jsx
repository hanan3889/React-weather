  import loader from './assets/loader.svg'
  import './App.css'
  import { useEffect, useState } from 'react';
  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY
  
  function App() {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {

      fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
      .then(response =>{
        console.log(response);
        return response.json()
      })
      .then(data => {

        console.log(data)
      })

    }, [])
  
    return (

        <main>
      <div className="loader-container">
        <img src={loader} alt="loading icon" />
      </div>
      <p className="city-name">Grenoble</p>
      <p className="country-name">France</p>
      <p className="temperature">12°</p>
      <div className="info-icon-container">
        <img src="/icons/02d.svg" alt="weather icon" className='info-icon'/>
      </div>
        </main>
    
    );
  }

  export default App;
