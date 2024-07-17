// src/api/generated/axiosInstance.ts
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE // Custom base URL
  // คุณสามารถเพิ่มการกำหนดค่าเพิ่มเติม เช่น headers, timeout, ฯลฯ
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // config.headers['Authorization'] = 'Bearer your_token'; // Custom header
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axiosInstance
