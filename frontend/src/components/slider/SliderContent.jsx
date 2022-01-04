import React from 'react';
// import { CSSTransition } from 'react-transition-group';

function SliderContent({activeIndex, imageSlider, prevSlide, nextSlide}) {
   return (
      <section>
         <span className = "prev" onClick={prevSlide}>&#10094;</span>

         {imageSlider.map((slide, index) => (
            <div 
               key={index} 
               className={index === activeIndex ? 'banner active' : 'inactive'}
            >
               <div className="banner_info">
                  <h5>Welcome to GreenShop</h5>
                  <h1>
                     {slide.title.substring(0, slide.title.lastIndexOf(" "))} 
                     <span style={{color: 'green'}}>
                        &nbsp;
                        {slide.title.substring(slide.title.lastIndexOf(" ")+1)}
                     </span>
                  </h1>
                  <p>{slide.description}</p>
                  <div className="btn btn_big">SHOP NOW</div>
               </div>
               <img className="planet_banner" src={slide.urls} alt="" />
            </div>
         ))}
         
         <span className = "next" onClick={nextSlide}>&#10095;</span>
      </section>
   );
};

export default SliderContent;