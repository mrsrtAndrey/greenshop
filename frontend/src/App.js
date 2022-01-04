import React from 'react';
import './styles/App.css'
import  {BrowserRouter, Routes, Route}  from "react-router-dom";
import Shop from './pages/Shop.jsx';
import Home from './pages/Home.jsx';
import PlantCare from './pages/PlantCare.jsx';
import Blogs from './pages/Blogs.jsx';
import Navbar from './components/Navbar.jsx'

const App = () => {
   return (
      <BrowserRouter>
         <Navbar/>
         <Routes>
               <Route path="/" element={<Home />} />
               <Route path="shop" element={<Shop />} />
               <Route path="plantcare" element={<PlantCare />} />
               <Route path="blogs" element={<Blogs />} />
         </Routes> 
      </BrowserRouter>
   ); 
};

export default App;