import { ADD_MESSAGE, ADD_USER, LOGIN_USER } from './types'

export const initialState = { user: '', message: '', isLoggedIn: false }


const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_USER:
      return {
        ...state, 
        user: payload,
      }
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: payload,
      }
    case ADD_MESSAGE:
      return {
        ...state,
        message: payload,
      }
    default:
      return state
  }
}


export default reducer