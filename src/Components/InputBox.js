import React from 'react'

//css files import below this
import "../Styles/inputbox.css";

function InputBox(props) {

    const {setTextValue} = props;

    function handleText(e){

        setTextValue(e.target.value);

    }
  
    return (
    <>
    
        <div>
            <input className='input-box' type="text" placeholder='Input text here' onChange={(e) => handleText(e)}></input>
        </div>

    </>
  )
}

export default InputBox