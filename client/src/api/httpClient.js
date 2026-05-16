import axios from 'axios'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || '',
  timeout: 30000,
})

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token && !config.headers.Authorization) {
    config.headers.Authorization = token
  }
  return config
})

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.message || error.message || 'Something went wrong'
    return Promise.reject({ ...error, userMessage: message })
  },
)

export default httpClient
