import { ADD_USER } from './types'

export const initialState = { user: '', isLoggedIn: false }


const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state, 
        user: action.payload,
        isLoggedIn: true,
      }
    default:
      return state
  }
}


export default reducer