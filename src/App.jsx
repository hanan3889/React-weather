  import loader from './assets/loader.svg'
  import browser from './assets/browser.svg'
  import './App.css'
  import { useEffect, useState } from 'react';
  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY
  
  function App() {
    const [weatherData, setWeatherData] = useState(null)
    const [errorInfo, setErrorInfo] = useState(null)

    useEffect(() => {
         //voir avec Charline le pb de la key
      fetch(`http://api.airvisual.com/v2/nearest_city?key=3c388a84-c5e7-4919-a7f8-d921a5de7d87`)
      .then(response =>{
        console.log(response);
        // console.log(APIKEY)
        if(!response.ok) throw new Error (`Error ${response.status}, ${response.statusText}`)
        return response.json()
      })
      .then(responseData => {
        setWeatherData({
          city: responseData.data.city,
          country: responseData.data.country,
          iconID: responseData.data.current.weather.ic,
          temperature: responseData.data.current.weather.tp,
        })
      })
      .catch(err =>{
        setErrorInfo(err.message)
      })

    }, [])
  
    return (

        <main>
        <div className={`loader-container ${(!weatherData && !errorInfo) && "active"}`}>
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

        {(errorInfo && !weatherData) && (
          <>
            <p className="error-information">{errorInfo}</p>
            <img src={browser} alt="error icon" />
          </>
        )}
        
        </main>
    
    );
  }

  export default App;
