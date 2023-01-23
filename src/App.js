import MovieNavbar from "./components/Navbar/Navbar";
import Home from "./components/Movies/Home";
import SciFi from "./components/Movies/SciFi";
import Comedy from "./components/Movies/Comedy";
import Horror from "./components/Movies/Horror";
import Thriller from "./components/Movies/Thriller";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <div className="App">
    <div className='backgroundHome'>
      <MovieNavbar/>
        <div className="container mt-5">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/comedy' element={<Comedy />}/>
            <Route path='/horror' element={<Horror />}/>
            <Route path='/scifi' element={<SciFi />}/>
            <Route path='/thriller' element={<Thriller />}/>
          </Routes>
       <Footer/>
        </div>
     
      </div> 
    </div>
    </>
  );
}

export default App;
