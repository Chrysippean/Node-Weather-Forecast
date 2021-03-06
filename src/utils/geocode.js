const request = require('request');

const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiY2hyeXNpcHBlYW4iLCJhIjoiY2tlM3FvcGU2MGx2MjJzbWF5YXNxMjlicCJ9.HIxhRxoq1C09M0Ml4RjVpA';
	request({ url: url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location services', undefined);
		} else if (body.features.length === 0) {
			callback('Unable to find location, try another search', undefined);
		} else {
			// console.log(body.features[0].center[0], body.features[0].center[1]) 
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name
			})
		}
	})
}

module.exports = geocode;