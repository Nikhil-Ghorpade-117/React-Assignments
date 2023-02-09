import React from 'react';

//css files import below this
import "../Styles/textviewer.css";

function TextViewer(props) {

    const {text} = props;

  return (
    <>
        <div className='text-viewer-container'>
          <div className='text'>

            <p>{text}</p>
          
          </div>
        </div>
    </>
  )
}

export default TextViewer