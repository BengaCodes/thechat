import axios from 'axios'

export const HUB_URL = 'http://localhost:5000/hubs/chat'
export const BASE_URL = 'http://localhost:5000/chat/messages'

export const sendMessage = message => axios.post(`${BASE_URL}`, message)