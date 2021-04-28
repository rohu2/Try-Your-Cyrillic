import './App.css';
import {useState, useEffect} from 'react'
const {['log']:c} = console


const words = [
    {cyrillic: 'Привет' , latin: 'privet', english: 'hello'  },
    {cyrillic: 'Пока' , latin: 'poka', english: 'hi'   }, 
    {cyrillic: 'да' , latin: 'da', english: 'yes'   }, 
    {cyrillic: 'нет' , latin: 'net', english: 'no'   }, 
    {cyrillic: 'Кот' , latin: 'kot', english: 'cat'   }, 
    {cyrillic: 'собака' , latin: 'sobaka', english: 'dog'   }, 
    {cyrillic: 'Спасибо' , latin: 'spasibo', english: 'thanks'   }, 
    {cyrillic: 'кофе' , latin: 'kofe', english: 'coffee'   }, 
    {cyrillic: 'рыбы' , latin: 'ryby', english: 'fish'   }, 
    {cyrillic: 'сова' , latin: 'sova', english: 'owl'   }, 
    {cyrillic: 'курица' , latin: 'kuritsa', english: 'hen'   }, 
    {cyrillic: 'петух' , latin: 'petukh', english: 'rooster'   }, 
    {cyrillic: 'человек' , latin: 'čhelovek', english: 'human'   }, 
    {cyrillic: 'ваше здоровье' , latin: 'vashe zdorovye', english: 'cheers'   }, 
    ]
let count = 0
let myWord = 0


export const App = () => {
// its sending whatever is in the chamber and then finding a new word ... wrong order
// let word = words[randomIndex(words.length - 1)]
const [bool, setBool] = useState(false)

  const [gifURL, setGifURL] = useState('')

useEffect(() => {
  count += 1
  c(count)


  // setRandomWord(words[randomIndex(words.length - 1)])
  // c(randomWord)

myWord = words[randomIndex(words.length - 1)]

const giphyQuery = `http://api.giphy.com/v1/gifs/search?q=${myWord.english}&api_key=wzQSIAGVgRydkTeIJNMr8AI37QgBbBQ8&limit=1&offset=1`


c(giphyQuery)

fetch(giphyQuery).then( res => res.json()).then( data => {c(data.data[0].images.original); setGifURL(data.data[0].images.original.url) } )






}, [bool])



function randomIndex(len) {
return Math.round(Math.random() * len)
}






    return (
        <div>
            
     {myWord.english}
    <img src={gifURL} ></img>
    <button onClick={()=>{ setBool(!bool) }}>button</button>
  

        </div>
    )
}


export default App;
