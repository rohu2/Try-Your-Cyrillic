import {useState, useEffect} from 'react'

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

const giphyQuery = `http://api.giphy.com/v1/gifs/search?q=${randomWord.english}&api_key=wzQSIAGVgRydkTeIJNMr8AI37QgBbBQ8&limit=1&offset=1`


export const App = () => {

    function randomIndex(len) {
        const random = Math.round(Math.random() * len)
       
        return random
        
          }






    return (
        <div>
            
            <img src={gif}></img>
  

        </div>
    )
}
