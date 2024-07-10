import { MainService } from './main-service'
// import { isValidURL } from 'src/@core/utils/stringUtils'
import { axiosInstance } from './main-service/core/request'

export const getToken = () => {
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refresh-token')

  return { accessToken: `Bearer ${accessToken}`, refreshToken: refreshToken }
}

axiosInstance.defaults.baseURL = process.env.NEXT_PUBLIC_SERVICE
console.log('🚀 ~ axiosInstance.defaults.baseURL:', axiosInstance.defaults.baseURL)
console.log('🚀 ~ process.env.NEXT_PUBLIC_SERVICE:', process.env.NEXT_PUBLIC_SERVICE)

axiosInstance.interceptors.request.use(
  config => {
    // const token = getToken()
    // config.headers['Authorization'] = token.accessToken
    // config.headers['refresh-token'] = token.refreshToken

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export const mainService = new MainService({})

// 476d0fca-76df-4bdc-bfec-9872487f1120
