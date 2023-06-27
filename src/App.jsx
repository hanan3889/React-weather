  import loader from './assets/loader.svg'
  import './App.css'
  import { useEffect, useState } from 'react';
  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY
  
  function App() {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
         //voir avec Charline le pb de la key
      fetch(`http://api.airvisual.com/v2/nearest_city?key=3c388a84-c5e7-4919-a7f8-d921a5de7d87`)
      .then(response =>{
        console.log(response);
        // console.log(APIKEY)
        return response.json()
      })
      .then(responseData => {

        console.log(responseData)
        setWeatherData({
          city: responseData.data.city,
          country: responseData.data.country,
          iconID: responseData.data.current.weather.ic,
          temperature: responseData.data.current.weather.tp,
        })
      })

    }, [])
  
    return (

        <main>
      <div className={`loader-container ${!weatherData && "active"}`}>
        <img src={loader} alt="loading icon" />
      </div>

      {weatherData && (
        <>
        <p className="city-name">{weatherData.city}</p>
        <p className="country-name">{weatherData.country}</p>
        <p className="temperature">{weatherData.temperature}°</p>
        <div className="info-icon-container">
        <img src={`/icons/${weatherData.iconID}.svg`} alt="weather icon" className='info-icon'/>
      </div>
        </>
        )}
        
        </main>
    
    );
  }

  export default App;
