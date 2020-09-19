const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=96b328d0ad7590f3f32e1dcc9e34e275&query=' + latitude + ',' + longitude + '&units=f';
	request({ url, json: true }, (error, { body }) => {
		// console.log(response.body)
		if (error) {
			callback('Unable to connect to weather service', undefined);
		} else if (body.error) {
			callback('Unable to find location', undefined);
		} else {
			let report = "It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees. "
			report += "There is a " + body.current.precip + "\% chance of rain. The humidity is " + body.current.humidity + ", and the cloud cover is " + body.current.cloudcover + "\%."
			callback(undefined, report)
		}
	})

}

module.exports = forecast;