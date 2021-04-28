import speak from "../img/speak.jpeg"

const Correct = ({ convertSymbols, playAudio, show, word, gif, setShow, words, setWord,  randomIndex  }) => {
    return (
       
<div style={{opacity: show ? "1" : "0"  }}>

    <br/> 
<img className="gif" src={gif}/>
<br/>
{word.cyrillic} = {convertSymbols(word.english)} 
<br/>
<button className="sound-effect" onClick={()=>{ playAudio()  }}  ><img className="speak-logo" src={speak} alt=""/></button>




</div>



    )
}


export default Correct