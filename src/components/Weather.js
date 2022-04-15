import React, { useState, useEffect } from 'react'
import axios from 'axios'

let icon

const Weather = ({ city, date }) => {
  const [state, setState] = useState({
    serverResponse: '',
  })

  useEffect(() => {
    async function fetchData() {
      const apiKey = '88311788ed96ee764097bb269c07c5f7'
      // const city = 'Rosario'
      console.log('Weather: ', city)
      const latLong = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
      )

      const lat = latLong.data[0].lat
      const lon = latLong.data[0].lon

      console.log('latLong: ', latLong.data[0].lat)

      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
        // `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )

      console.log(res.data.list[0].dt)
      console.log(res.data.list[0].weather[0].main)
      console.log('date rrr', date)
      console.log('res: ', res)
      let iconcode

      // let mainWeatherData
      // const { data } = await res
      // mainWeatherData = data.weather[0].main
      // iconcode = data.weather[0].icon
      // icon = (
      //   <img
      //     src={`http://openweathermap.org/img/w/${iconcode}.png`}
      //     alt={`${mainWeatherData}`}
      //     style={{
      //       width: 'clamp(2rem, 25%, 47px)',
      //     }}
      //   ></img>
      // )
    }
    fetchData()
  }, [city])

  return <div>{/* <div>{icon}</div> */}</div>
}

export default Weather
