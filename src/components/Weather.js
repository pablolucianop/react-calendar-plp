import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiKey } from '../utils/apiKey'

let icon

const Weather = ({ city, date }) => {
  const [state, setState] = useState({
    serverResponse: '',
  })
  const [specificWeather, setSpecificWeather] = useState()
  const [iconWeather, setIconWeather] = useState()

  useEffect(() => {
    async function fetchData() {
      console.log('Weather: ', city)
      const latLong = await axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
        )
        .catch((error) => {
          console.log(error.response)
        })

      const lat = latLong.data[0].lat
      const lon = latLong.data[0].lon

      console.log('latLong: ', latLong.data[0].lat)

      const res = await axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
        )
        .catch((error) => {
          console.log(error.response)
        })
      const weatherInRange = res.data.list.filter(isInRange)
      const mainWeatherData = weatherInRange[0].weather[0].main
      setSpecificWeather(mainWeatherData)
      setIconWeather(weatherInRange[0].weather[0].icon)
      function isInRange(obj) {
        const weatherData = new Date(obj.dt_txt).getTime()
        const dayInQuestion = new Date(date).getTime()
        const secondsInHour = 3600000 * 2
        const acceptedMargin = secondsInHour

        return (
          acceptedMargin + weatherData > dayInQuestion &&
          weatherData - acceptedMargin < dayInQuestion
        )
      }

      let iconcode
    }
    fetchData()
  }, [city, iconWeather, date])

  icon = (
    <img
      src={`http://openweathermap.org/img/w/${iconWeather}.png`}
      alt={`${specificWeather}`}
      style={{
        width: 'clamp(2rem, 25%, 47px)',
      }}
    ></img>
  )

  return <div>{iconWeather !== undefined ? icon : ''}</div>
}

export default Weather
