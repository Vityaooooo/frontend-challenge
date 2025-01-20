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

export const getCatApi = async (page = 0) => {
	try {
		const response = await fetch(
			`${URL}search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${page}&limit=30`,
			requestOptions
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return response.json();
	} catch (error) {
		console.error('Error fetching cats:', error);
		return []; 
	}
};
