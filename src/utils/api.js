const URL = process.env.CAT_API_URL;
const API_KEY = process.env.API_KEY;

const headers = new Headers({
	'Content-Type': 'application/json',
	'x-api-key': API_KEY,
});

const requestOptions = {
	method: 'GET',
	headers: headers,
};

export const getCatApi = (page = 0) => {
	try {
		return fetch(
			`${URL}search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${page}&limit=30`,
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => result)
			.catch((error) => error);
	} catch (error) {
		console.log('Caught an error:', error);
	}
};
