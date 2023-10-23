import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://superheroapi.com/api.php/348149141064413/",
});
