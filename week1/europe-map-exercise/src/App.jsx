import React from 'react'
import './App.css'
import SvgComponent from './SvgComponent'
import getCountryData from './ClickableMapComponent'

function App() {
  const { handleCountryClick, countryData} = getCountryData()

  return (
    <>
      <SvgComponent onClick={handleCountryClick} />
      <div>
      {countryData && ( //checks if there is any data, and if not, then block is not rendered
                <div>
                    <h2>Country Details:</h2>
                    <p>Name: {countryData.name.common}</p>
                    <p>Population: {countryData.population}</p>
                    <p>Area: {countryData.area}</p>
                    <p>Borders: {countryData.borders}</p>
                </div>
            )}
      </div>
    </>
  )
}

export default App
