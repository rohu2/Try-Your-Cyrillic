import {useState} from 'react'

const UserInput = ({ userWordLatin, userWordEnglish, charsLatin, charsEnglish, setCharsLatin, setCharsEnglish    }) => {
  

  
    return (

        <>
            
            <br/>
<span>
<input ref={userWordLatin} value={charsLatin} onChange={(e)=>{setCharsLatin(e.target.value)}} type="text"/>
<br/>
<br/> 
{/* <input ref={userWordEnglish} value={charsEnglish} onChange={(e)=>{setCharsEnglish(e.target.value)}}    type="text"/> */}
</span>


        </>

    )
}



export default UserInput