/**
 * @providesModule %actions
 */

let API_BASE_URL = 'https://newsapi.org/v2/top-headlines?country=us&category='
let category = 'sports'
let apiKey = 'e9a1cdb23d6a4a2a8b9fc1e12bbbe002';

 export const increment = () => ({ type: types.INCREMENT })

 export const double = () => ({
   type: types.DOUBLE,
 })

fetch(`${API_BASE_URL}${category}${apiKey}`)
.then(res => {
  if (!res.ok) {
  return Promise.reject(res.statusText);
}
return res.json();
})
.then(question => {
  console.log(question);
})
