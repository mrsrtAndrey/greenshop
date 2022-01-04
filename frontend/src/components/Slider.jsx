import React,{useState, useEffect} from 'react';
import SliderContent from "./slider/SliderContent";
import arrSlider from './slider/arrSlider.js';
import Dots from "./slider/Dots"
import "../styles/slider.css"

const len = arrSlider.length - 1;

const Slider = () => {
   const [activeIndex, setActiveIndex] = useState(0)

   useEffect(()=>{
      const interval = setInterval(()=>{
         setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
      }, 10000);
      return () => clearInterval(interval);
   }, [activeIndex]);

   return (
      <div className="slider-container">
         
         <SliderContent 
            activeIndex={activeIndex} 
            imageSlider = {arrSlider}
            prevSlide={()=> setActiveIndex(activeIndex<1? len: activeIndex-1)} 
            nextSlide={()=> setActiveIndex(activeIndex === len? 0: activeIndex+1)}
         />
         <Dots 
            activeIndex={activeIndex} 
            imageSlider={arrSlider} 
            onclick={(activeIndex) => setActiveIndex(activeIndex)}/>
      </div>
   );
};

export default Slider;