import React from 'react'
import Comedy from './Comedy'
import Horror from './Horror'
import SciFi from './SciFi'
import Thriller from './Thriller'
import Footer from '../Footer/Footer'



const Home = () => {
  return (
    <div>
        <Comedy/>
        <Horror/>
        <SciFi/>
        <Thriller/>
        <Footer/>
        
    </div>
  )
}

export default Home;