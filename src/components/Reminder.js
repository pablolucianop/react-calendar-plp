import React from 'react'

import './Reminder.css'

// const apiKey = '88311788ed96ee764097bb269c07c5f7'
// let iconcode
// let icon
// let mainWeatherData
// const getLatLongFromCity = async (city, apiKey) => {
//   const response = await fetch(
//     `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//   )
//   const data = await response.json()
//   console.log('data', data)
//   iconcode = data.weather[0].icon
//   console.log('iconcode', iconcode)

//   icon = (
//     <img
//       src={`http://openweathermap.org/img/w/${iconcode}.png`}
//       alt="Weather icon"
//     ></img>
//   )
//   mainWeatherData = data.weather[0].main
//   console.log(data.weather[0].main)
//   return data
// }

// getLatLongFromCity('Rosario', apiKey)

const Reminder = ({ city, reminderText, date, color, time }) => {
  return (
    <div
      className="reminder-container"
      style={{
        backgroundColor: color,
        transition: 'ease all 500ms',
      }}
    >
      <div>{reminderText}</div>
      <div>{date}</div>
      <div>{time}</div>
      <div>{city}</div>
    </div>
  )
}

export default Reminder
