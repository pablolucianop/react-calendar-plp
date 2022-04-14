import React, { useState } from 'react'
import axios from 'axios'

// const Calendar2 = () => {
//   const apiKey = '88311788ed96ee764097bb269c07c5f7'
//   let iconcode
//   let icon
//   let mainWeatherData

//   const getLatLongFromCity = async (city, apiKey) => {
//     const response = await fetch(
//       `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//     )
//     const data = await response.json()
//     console.log('data', data)
//     iconcode = data.weather[0].icon
//     console.log('iconcode', iconcode)

//     icon = (
//       <img
//         src={`http://openweathermap.org/img/w/${iconcode}.png`}
//         alt="Weather icon"
//       ></img>
//     )
//     mainWeatherData = data.weather[0].main
//     console.log(data.weather[0].main)
//     return data
//   }

//   getLatLongFromCity('Rosario', apiKey)

//   return <div>hello{icon}</div>
// }
let icon
class Wheather extends React.Component {
  constructor() {
    super()
    this.state = {
      serverResponse: '',
    }
  }
  componentDidMount() {
    this.getData()
  }

  async getData() {
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
        alt="Weather icon"
      ></img>
    )
    console.log('data', data)
    this.setState({ serverResponse: data })
  }
  render() {
    return (
      <div>
        <div>hello{icon}</div>
      </div>
    )
  }
}

export default Wheather
