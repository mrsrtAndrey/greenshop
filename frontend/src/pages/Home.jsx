import React from 'react';
import '../styles/Home.css'
import Slider from '../components/Slider'

const Home = () => {
   return (
      <div className="container">
         <header>
            <Slider />
         </header>
         Hello
      </div>
   );
};

export default Home;