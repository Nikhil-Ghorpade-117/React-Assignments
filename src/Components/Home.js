import React from 'react';

//css files below this line
import "../Styles/Home.css";


//file imports below this line
import {Header, Footer, Content} from "./index";


function Home() {
  return (
    <div className='Home'>

        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default Home