const API_KEY = 'live_WkXL7f6Wq8xfOiJjTbTR1xgqHeYns2sAa1Mkhnty8w28yVzX4D6HnFLuZO5VJWoe';

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": API_KEY
});

const requestOptions = {
  method: 'GET',
  headers: headers,
};

export const getCatApi = (page = 0) => {
  try {
    return fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${page}&limit=30`, requestOptions)
      .then(response => response.json())
      .then(result => result)
      .catch(error => error);
  } catch (error) {
    console.log('Caught an error:', error);
  }
};
