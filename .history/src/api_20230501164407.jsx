import axios from "axios";
import API_KEY from "../config";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const getCurrentWeaterData = (lat = 34.796871, lng = 72.346043) => {
  return axios
    .get(`${API_BASE_URL}weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw new Error("Failed to fetch weather data");
    });
};
