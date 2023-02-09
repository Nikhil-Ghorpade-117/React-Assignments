import React, { useState } from 'react';

//css files below this line
import "../Styles/Home.css";


//file imports below this line
import {Assignment_1, Assignment_2} from "./index";


function Home() {

  const [textValue, setTextValue] = useState("");

  return (
    <div className='Home'>

      <h2>Home</h2>

      {/* <Assignment_1/> */}

      <Assignment_2 textValue={textValue} setTextValue={setTextValue}/>


       
    </div>
  )
}

export default Home