import { ADD_MESSAGE, ADD_USER, CHAT_MESSAGES, LOGIN_USER, LOGOUT_USER } from './types'

export const initialState = { user: '', message: '', isLoggedIn: false, chats: [], person: '' }

export const initializer = (initialValue = initialState) => JSON.parse(localStorage.getItem('chatState')) || initialValue


const reducer = (state = initialState, action) => {
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
    case CHAT_MESSAGES:
      return {
        ...state,
        chats: [...state.chats, payload],
      }
    case LOGOUT_USER:
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