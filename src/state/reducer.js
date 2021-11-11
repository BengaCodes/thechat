import { ADD_USER, LOGIN_USER } from './types'

export const initialState = { user: '', isLoggedIn: false }


const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state, 
        user: action.payload,
      }
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    default:
      return state
  }
}


export default reducer