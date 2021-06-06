import React, { useState } from "react";

import Header from "../components/Header";
import Weather from "../components/Weather";

import {server} from '../config';

export default function Home() {
	const [tempUnit, setTempUnit] = useState(true)

	const switchTempUnit = ()=>{
		setTempUnit(!tempUnit)
	}

	const fetchWeatherData = async () => {
		let id = document.getElementById("search").value;
		if (id ===""){
			alert("Search cannot be empty")
			return
		}
		const res = await fetch(`/api/${id}`)
		if (res.status === 400){
			alert("City not found")
			return
		}
		let weatherObj = await res.json()
		setWeatherData(weatherObj)

	}

	const [weatherData, setWeatherData] = useState(
		null
		)


	return (
		<div className="App">
			<Header tempUnit={tempUnit} switchTempUnit={switchTempUnit}  fetchWeatherData={fetchWeatherData} />
			{weatherData? <Weather tempUnit={tempUnit} weatherData={weatherData} />: <></>}
		</div>
	)
}

