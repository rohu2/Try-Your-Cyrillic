import {useState} from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {

position: 'fixed',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
backgroundColor: '#FFF',
padding: '50px',
zIndex: 2,
transition: '1s',
borderRadius: '5px'

}

const OVERLAY_STYLES = {

position: 'fixed',
top: 0 ,
left: 0 ,
right: 0 ,
bottom: 0 ,
backgroundColor: 'rgba(0,0,0,.7)',
zIndex: 2,
transition: 's',

}



const Modal = ({ modalState, setModalState, len  }) => {

    const [backdropState, setBackdropState] = useState(false)


console.log(modalState)
if(!modalState) return null
    return (
    <>
        <div style={OVERLAY_STYLES}  onClick={()=>{setModalState(!modalState)}}/>

       <div style={MODAL_STYLES}>
            
<span > Добро пожаловать! Welcome! If you are trying to learn the cyrillic script - this app is for you! 
    
    Test your cyrillic tranliteration skills against {len} cyrillic words - try to convert the displayed cyrillic noun or phrase into its alphabetic equivalent - and for each sucessful transliteration you win a fun GIF! Enjoy :-)    </span>
    
    </div>
  </>
       
    )
}


export default Modal
// ReactDom.createPortal      ,document.getElementById('portal')

//<div className="backdrop"/>