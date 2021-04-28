import {useState} from 'react'



 const Buttons = ({ show, setShow, word, words, setWord , setCharsLatin, userWordLatin, userWordEnglish, compare, randomIndex, setOpacity }) => {


    // function Hello() {
    //     useEffect(() => {
    //       const doSomething = () => {};
      
    //       window.addEventListener("scroll", doSomething);
    //       return () => {
    //         window.removeEventListener("scroll", doSomething);
    //       };
    //     }, []);
    //   }



    const timeOut = () => {
    
        setTimeout( ()=>{ setOpacity(0) }  ,2000)
    
    
    } 



    return (
       <span className="control-panel" >
            

            <div className="button-grid-large">          

<button className="try-button" onClick={ show ? ()=>{ setCharsLatin(''); setShow(false); setWord(words[randomIndex(words.length - 1)])} : ()=>{ compare() }} > {show ? "next" : "try"}  </button>

<span></span>
<span></span>

<div className="button-grid-small">

<span></span>

<span>
<button className="skip-button" onClick={()=>{ setWord( words[randomIndex(words.length - 1)]) }} >skip</button>
</span>

<span>
<button className="peek-button" onClick={()=>{ timeOut(); setOpacity(1) }} >peek</button>
</span>

<span></span>

</div>

</div>

        </span>
    )
}



export default Buttons