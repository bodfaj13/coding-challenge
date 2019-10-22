import * as CONSTANT from '../constants/constants'

const initialState = {
  users: []
}

const tableReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case CONSTANT.ADD_USER:
      return {
        ...state,
        users: [...state.users, payload]
      }
    default: 
      return state
  }
}

export default tableReducer