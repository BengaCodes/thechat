import { ADD_MESSAGE, ADD_USER, CHAT_MESSAGES, LOGIN_USER, LOGOUT_USER } from './types'

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: user,
  }
}

export const loginUser = () => {
  return {
    type: LOGIN_USER,
    payload: true,
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: false,
  }
}

export const addMessage = message => {
  return {
    type: ADD_MESSAGE,
    payload: message,
  }
}

export const chatMessage = chat => {
  return {
    type: CHAT_MESSAGES,
    payload: chat,
  }
}