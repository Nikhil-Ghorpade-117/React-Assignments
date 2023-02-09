import '../Styles/App.css';

//file imports below this line
import {Home, Assignment_1, Assignment_2, Navbar} from "./index";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/assignment-static' element={<Assignment_1/>}/>
        <Route path='/assignment-show-my-name' element={<Assignment_2/>}/>
      </Routes>

    </div>
  );
}

export default App;
