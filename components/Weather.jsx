import React from 'react'

const Weather = ({ weatherData, tempUnit }) => {

	return (
		<main>
			<div className="today">
				<h1 className="city">{weatherData.location.name}</h1>
				<p className="country">{weatherData.location.country}</p>
				<img className="icon" src={weatherData.current.condition.icon} alt="Weather Icon"/>
				<h3>{weatherData.current.condition.text}</h3>
				<h1>{tempUnit? Math.round(weatherData.current.temp_c)+"°C": Math.round(weatherData.current.temp_f)+"°F"}</h1>
				<p className="description">
					Feels like: {tempUnit? Math.round(weatherData.current.feelslike_c)+"°C": Math.round(weatherData.current.feelslike_f)+"°F"}
				</p>
				<ul className="max-min">
					<li className="max-temp">
						<strong>Max temp:</strong><br/> {tempUnit? Math.round(weatherData.forecast.forecastday[0].day.maxtemp_c)+"°C" : Math.round(weatherData.forecast.forecastday[0].day.maxtemp_f)+"°F" }
					</li>
					<li className="min-temp">
						<strong>Min temp:</strong><br/> {tempUnit? Math.round(weatherData.forecast.forecastday[0].day.mintemp_c)+"°C" : Math.round(weatherData.forecast.forecastday[0].day.mintemp_f)+"°F" }
					</li>
				</ul>
				
				
			</div>
		</main>
	)
}

export default Weather
