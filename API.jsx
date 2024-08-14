// const https = require('https');

// const options = {
// 	method: 'GET',
// 	hostname: 'exercisedb.p.rapidapi.com',
// 	port: null,
// 	path: '/exercises/bodyPart/back?limit=10&offset=0',
// 	headers: {
// 		'x-rapidapi-key': 'd9a1afd6fdmshd3399f9916a9c6bp155046jsn5353cf4924e6',
// 		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
// 	}
// };

// const req = https.request(options, function (res) {
// 	const chunks = [];

// 	res.on('data', function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on('end', function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();


// export const exerciseOptions = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': 'd9a1afd6fdmshd3399f9916a9c6bp155046jsn5353cf4924e6',
//     'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
//   },
// };

// export const fetchData = async (url, options) => {
//   const response = await fetch(url, options);
//   const data = await response.json();
//   return data;
// };