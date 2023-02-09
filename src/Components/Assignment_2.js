import React from 'react';

// file imports below this line
import {InputBox, TextViewer} from "./index";

function Assignment_2(props) {

    const {textValue, setTextValue} = props; // destructuring the props object

  return (
    <div>
        
        <InputBox setTextValue={setTextValue}/>
        <TextViewer text={textValue}/>

    </div>
  )
}

export default Assignment_2;