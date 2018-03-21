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
    let imgArray = action.articles.articles.filter(article => article.urlToImage !== null && !article.urlToImage.includes('http://'));
    // let httpsString = 'https://';
    // imgArray2 = imgArray.map(function(article) {
    //   let newHttp = article.urlToImage.replace('http://', httpsString);
    //   console.log(newHttp);
    //   article.urlToImage = newHttp;
    //   console.log(article);
    //   return article;
    // });
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
