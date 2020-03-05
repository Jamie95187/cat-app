import axios from 'axios';

export default async () => {
  const config = { headers: { 'x-api-key': process.env.REACT_APP_CAT_API_KEY } };
  const response = await axios.get('https://api.thecatapi.com/v1/images/search?', config);

  return response.data[0];
}
