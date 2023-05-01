import axios from "axios";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";
import API_KEY from "../config";

export const getCurrentWeaterData = (lat = 35.2227, lng = 72.4258) => {
  return axios
    .get(`${API_BASE_URL}weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
    .then((res) => console.log(res)).catch(error => {
      console.error(error);
      throw new Error('Failed to fetch users'));
};
