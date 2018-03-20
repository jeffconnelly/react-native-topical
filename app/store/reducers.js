import types from './actionTypes'
// import initialState from './initialState'

import {
  FETCH_ARTICLES_SUCCESS
} from './actions';

const initialState = {
  articles: null
};

function newsReducer (state=initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
    console.log(action.articles.articles);
      return { 
        ...state, 
        articles: action.articles.articles
      }
    default:
      return state
  }
}

export function rootReducer (state = initialState, action) {
  return {
    counter: newsReducer(state.counter, action),
  }
}
