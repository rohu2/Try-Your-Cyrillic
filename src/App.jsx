import './App.css';
import {useState, useEffect, useRef} from 'react'
import UserInput from './components/UserInput'
import Correct from './components/Correct'
import Modal from './components/Modal'
import SoundLibruary from './SoundLibruary'
import Buttons from './components/Buttons'
import words from './words.js'
import Display from './components/Display'
import APIkey from './APIKey'

const {['log']:c} = console




export const App = () => {

const [word,setWord] = useState(words[randomIndex(words.length - 1)])
const [gif, setGif] = useState('')
const [show, setShow] = useState(false)

const [modalState,setModalState] = useState(false)
const [opacity, setOpacity] = useState(0)

const userWordLatin = useRef()
const userWordEnglish = useRef()

const [charsLatin, setCharsLatin,] = useState('')
const [charsEnglish, setCharsEnglish] = useState('')




useEffect(() => {

const giphyQuery = APIkey(word)

fetch(giphyQuery).then((obj)=> obj.json() ).then((data)=>{ setGif(data.data[0].images.original.url)  })

  
}, [word])


function randomIndex(len) {
return Math.round(Math.random() * len)
}


function compare(input){


//let value = input.split('').map((char) => char.toLowerCase()).join('')



    if(userWordLatin.current.value === convertSymbols(word.latin)){
    // if(userWordEnglish.current.value === convertSymbols(word.english)){   
    
        setShow(true)
        playAudio()

        setCharsLatin('')
        setCharsEnglish('')
      
    
    }

    else{

     
       

    }

}

function convertSymbols(str){

return str.split('').map((char)=> { 

    if(char === '$') return "'"

    if(char === '_') return ' '

    if(char === '+') return ' '

    return char

   } ).join('')

}



function playAudio(){

c(word.latin)


    let audio = new Audio(SoundLibruary[`${word.latin}`])

    audio.play()


}




    return (
        
<div className="App">



<div onClick={()=>{ setModalState(!modalState) }} className="info-box" >?</div>
<br/>

<Modal modalState={modalState} setModalState={setModalState} len={words.length}/>
<Display opacity={opacity} word={word} convertSymbols={convertSymbols} />


<UserInput  userWordLatin={userWordLatin} userWordEnglish={userWordEnglish} charsLatin={charsLatin} charsEnglish={charsEnglish} setCharsLatin={setCharsLatin} setCharsEnglish={setCharsEnglish}/>



<Correct convertSymbols={convertSymbols} playAudio={playAudio}  show={show}   word={word}   gif={gif}   setShow={setShow}   words={words} setWord={setWord}   randomIndex={randomIndex} />
<br/>
<br/>
<Buttons show={show} setShow={setShow} word={word}  words={words} setWord={setWord} setCharsLatin={setCharsLatin} userWordLatin={userWordLatin} userWordEnglish={userWordEnglish} compare={compare} randomIndex={randomIndex} setOpacity={setOpacity} />

</div>
        
    )
}


export default App;
export {convertSymbols} 



function convertSymbols(str){

   return str.split('').map((char)=> { 
    
        if(char === '$') return "'"
    
        if(char === '_') return ' '
    
        else{ return char }
    
       } ).join('')
    
    }