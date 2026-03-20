import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost/api'
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    config.headers['Access-Control-Allow-Origin'] = '*'

    if (token) {
      config.headers.Authorization = token
    }

    return config
})


export default api