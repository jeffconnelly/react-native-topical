import types from './actionTypes'
// import initialState from './initialState'

import {
  FETCH_ARTICLES_SUCCESS
} from './actions';

const initialState = {
  articles: ['test']
};

export function newsReducer (state=initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
    // console.log(action.articles.articles);
    // console.log(state.articles);
      return { 
        ...state, 
        articles: action.articles.articles
      }
    default: return state
  }
}

export default newsReducer;

// export function rootReducer (state = initialState, action) {
//   return {
//     articles: newsReducer(state.articles, action),
//   }
// }
