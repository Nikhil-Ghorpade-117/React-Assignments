import React from 'react'
import {Link} from "react-router-dom";

//css files import below this line
import "../Styles/navbar.css";

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar'>

            <ul className='list-items'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/assignment-static">Static</Link>
                </li>
                <li>
                    <Link to="/assignment-show-my-name">Show My Name</Link>
                </li>
                <li>
                    <Link to="/form">Formik Form</Link>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Navbar

