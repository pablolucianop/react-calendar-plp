import React, { useState, useEffect } from 'react'
import axios from 'axios'

let icon

const Weather = () => {
  const [state, setState] = useState({
    serverResponse: '',
  })

  useEffect(() => {
    async function fetchData() {
      const apiKey = '88311788ed96ee764097bb269c07c5f7'
      const city = 'Rosario'
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      let iconcode

      let mainWeatherData
      const { data } = await res
      mainWeatherData = data.weather[0].main
      iconcode = data.weather[0].icon
      icon = (
        <img
          src={`http://openweathermap.org/img/w/${iconcode}.png`}
          alt={`${mainWeatherData}`}
          style={{
            width: 'clamp(1rem, 25%, 47px)',
          }}
        ></img>
      )
    }
    fetchData()
  }, [])

  return (
    <div>
      <div>{icon}</div>
    </div>
  )
}

export default Weather
