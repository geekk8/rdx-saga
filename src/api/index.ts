import axios from 'axios'
const API = axios

API.interceptors.request.use(
  (config) => {
    //todo..
    return config
  },
  (error) => {
    //todo..
    Promise.reject(error)
  },
)

API.interceptors.response.use(
  (response) => {
    //todo..
    return response
  },
  (error) => {
    //todo..
    Promise.reject(error)
  },
)

export default API
