import axios from 'axios'

const BASE_URL = 'https://api.github.com'
export default function request(config) {
  let headers = {}

  return axios({
    ...config,
    headers: {
      ...headers,
      ...config.headers
    },
    url: `${BASE_URL}/${config.url}`
  }).catch(error => ({
    error: { ...error }
  }))
}