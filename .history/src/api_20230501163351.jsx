import axios from "axios";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";
import API_KEY from "../config";

export const getCurrentWeaterData = (lat = 34.796871, lng = 72.346043) => {
  return axios
    .get(`${API_BASE_URL}weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
    .then((res) => console.log(res)).catch(error => {
      console.error(error);
      throw new Error('Failed to fetch users')});
};
