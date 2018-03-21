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
    // console.log(action.articles.articles);
    let imgArray = action.articles.articles.filter(article => article.urlToImage !== null);
    // console.log('img Array is', imgArray);
    let httpsString = 'https://';
    imgArray.forEach(function(article) {
      article.urlToImage.replace('http://', httpsString);
      console.log(article.urlToImage);
      return article;
    });
    console.log('img Array is', imgArray);
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
