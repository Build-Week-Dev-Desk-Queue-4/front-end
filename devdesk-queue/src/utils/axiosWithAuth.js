import axios from 'axios';

// After Login
export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  const tokenType = localStorage.getItem('tokenType');

  return axios.create({
    headers: {
      Authorization: tokenType + token
    }, baseURL: "https://devdeskq.herokuapp.com/"
  });
};

//Login requests
export const axiosLoginAuth = () => {

  return axios.create({
    headers: {
      Authorization: "Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0"
    }, baseURL: "https://devdeskq.herokuapp.com/"
  });