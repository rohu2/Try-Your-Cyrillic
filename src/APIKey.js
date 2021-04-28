
function APIkey(word){

const api_key =  'here you need to go to Giphy Development - create an account and get a free API key - then just paste the key into this variable and the gifs should work as intended'
const limit = 1
const offset = Math.round(Math.random() * 200 )



 return ( `http://api.giphy.com/v1/gifs/search?q=${word.english}&api_key=${api_key}&limit=${limit}&offset=${offset}` ) 



}
   export default APIkey


