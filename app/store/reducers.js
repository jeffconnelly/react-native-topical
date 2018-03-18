import types from './actionTypes'
import initialState from './initialState'

function counterReducer (state, action) {
  const { type } = action
  switch (type) {
    case types.INCREMENT:
      return { ...state, value: state.value + 1 }
    case types.DOUBLE:
      return { ...state, value: state.value * 2 }
    case types.RESET:
      return { ...state, value: 0 }
    default:
      return state
  }
}

export function rootReducer (state = initialState, action) {
  return {
    counter: counterReducer(state.counter, action),
  }
}
