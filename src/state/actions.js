import { ADD_USER, LOGIN_USER } from './types'

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