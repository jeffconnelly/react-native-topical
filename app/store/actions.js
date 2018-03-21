/**
 * @providesModule %actions
 */

//  export const increment = () => ({ type: types.INCREMENT })

//  export const double = () => ({
//    type: types.DOUBLE,
//  })

let API_BASE_URL = 'https://newsapi.org/v2/top-headlines?country=us&category='
let apiKey = 'e9a1cdb23d6a4a2a8b9fc1e12bbbe002';

export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const fetchArticlesSuccess = articles => ({
    type: FETCH_ARTICLES_SUCCESS,
    articles
});

export const fetchTopicNews = category => dispatch => {
  console.log('Action topic is:', category);
  let newCategory = category.toLowerCase();
  fetch(`${API_BASE_URL}${newCategory}&apiKey=${apiKey}`)
  .then(res => {
    if (!res.ok) {
    return Promise.reject(res.statusText);
  }
  return res.json();
  })
  .then(articles => {
    dispatch(fetchArticlesSuccess(articles))
  })
};

