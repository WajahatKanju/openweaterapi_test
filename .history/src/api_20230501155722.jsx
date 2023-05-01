import axios from 'axios';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/';
import API_KEY from '../config'

export const getCurrentWeaterData = (lat, lng) => { 
  return axios.get(`${API_BASE_URL}weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`) 
}
