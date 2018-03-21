import types from './actionTypes'
// import initialState from './initialState'

import {
  FETCH_ARTICLES_SUCCESS
} from './actions';

const initialState = {
  articles: null,
  savedArticles: null
};

export function newsReducer (state=initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
    console.log(action.articles.articles);
    let imgArray = action.articles.articles.filter(article => article.urlToImage !== null);
    console.log(imgArray);
      return { 
        ...state, 
        articles: imgArray
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
