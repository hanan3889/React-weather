  import loader from './assets/loader.svg'
  import './App.css'
  
  function App() {
  
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
