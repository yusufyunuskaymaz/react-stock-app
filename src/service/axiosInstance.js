import axios from "axios";



const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
const token = escapedToken && JSON.parse(escapedToken);

export const axiosWithToken = axios.create({
    baseURL: 'http://14129.fullstack.clarusway.com/',
    headers: {Authorization: `Token ${token}`}
  });