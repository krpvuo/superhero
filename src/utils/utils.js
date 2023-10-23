import axios from "axios";


export const customFetch = axios.create({
  baseURL: `https://superheroapi.com/api.php/${import.meta.env.VITE_API_KEY}`,
});
