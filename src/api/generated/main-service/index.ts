import { Api } from './apiGenerated'
import axiosInstance from '../configs/axiosInstance' // import custom Axios instance ของคุณ

const mainService = new Api({
  baseURL: process.env.NEXT_PUBLIC_SERVICE,
  ...axiosInstance // ใช้ custom Axios instance ของคุณ
})

export default mainService
