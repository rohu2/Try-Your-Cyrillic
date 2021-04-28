

const Display = ({ word, opacity, convertSymbols    }) => {
    return (
        <div>
            
            <span  className='display-text'>{word.cyrillic}</span>

<br/>

<span style={ { opacity : opacity  } } className='display-text'>{convertSymbols(word.latin)}</span>
<br/>
<br/>


        </div>
    )
}


export default Display