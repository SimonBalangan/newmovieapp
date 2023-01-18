import MovieNavbar from "./components/Navbar/Navbar";
import SciFi from "./components/Home/SciFi";
import Comedy from "./components/Home/Comedy";
import Horror from "./components/Home/Horror";
import Thriller from "./components/Home/Thriller";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from './components/Home/Footer'

function App() {
  return (

    //   <>
      
    //   <MovieNavbar />
    //   <div className="container mt-5">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
          
    //     </Routes>
    //   </div>
    // </>


    <>
    <div className="App">
    <div className='backgroundHome'>
      

      <MovieNavbar/>

      <Home/>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/comedy' element={<Comedy />}/>
      <Route path='#horror' element={<Horror />}/>
      </Routes>
      

      
      </div>
    
      
    </div>
    </>
  );
}

export default App;
