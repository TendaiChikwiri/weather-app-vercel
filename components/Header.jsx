import React,{useEffect} from 'react'

const Header = ({ fetchWeatherData, switchTempUnit, tempUnit }) => {
 	useEffect(() => {
  		let input = document.getElementById("search");
			input.addEventListener("keyup", function(event) {
  			if (event.keyCode === 13) {
	   			event.preventDefault();
	   			document.getElementById("search-btn").click();
	   	}
   	});
	}, []);

	return (
		<ul className="navbar">
			<li className="nav-item"><h1>Weather App</h1></li>
			<li className="nav-item">
				<label htmlFor="search">
					<input type="search" name="search" id="search" />
					<button id="search-btn" onClick={fetchWeatherData} ><span className="material-icons">search</span></button>
				</label>
			</li>
			<li className="nav-item">
				<button className="temp-btn" onClick={switchTempUnit}>
					<h2>°{tempUnit? "F": "C"}</h2>
				</button>
			</li>
		</ul>
	)
}

export default Header
