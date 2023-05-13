import axios from 'axios'

const confirmPlan = (payload) => {
  const url = `https://jsonplaceholder.typicode.com/posts`
  return axios.post(url, payload)
}

export const confirmService = {
  confirmPlan
}
