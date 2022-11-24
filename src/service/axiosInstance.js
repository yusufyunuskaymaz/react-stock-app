import axios from "axios";



const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
const token = escapedToken && JSON.parse(escapedToken);

const axiosWithToken = axios.create({
    baseURL: ' https://14129.fullstack.clarusway.com/',
    headers: {Authorization: `Token ${token}`}
  });