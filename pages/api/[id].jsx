

export default async ({ query: { id } }, res) => {
	const weatherRes = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=7575d95830a04c70aec75513210306&q=${id}&days=1&aqi=no&alerts=no`)
	if(weatherRes.status !== 200){
		res.status(400).json({"reposnse":"City not found"})
		return
	} 
	const weatherObj = await weatherRes.json()
	console.log(weatherObj)
	
	res.status(200).json(weatherObj)
}
