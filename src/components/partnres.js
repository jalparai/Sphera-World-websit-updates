


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import profImg from '../../images/slid-3.png';
import "../assets/css/patners.css"
import slidOne from '../assets/images/Group 4 (1).png'
import ProfileTeam from './team'
const CardSlider3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,  // Hide the arrows
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
   

    responsive: [
        {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
   <div className="coursel_main container">
          <h1>Our Partners</h1>
      </div>
    <Slider {...settings} className='mt-2'>
      <div className="card">
      <img src={slidOne} alt="" />

      </div>   
      <div className="card">
      <img src={slidOne} alt="" />

      </div>  
  
      <div className="card">
      <img src={slidOne} alt="" />
      </div>   
  
      <div className="card">
      <img src={slidOne} alt="" />

      </div>  
     
      <div className="card">
      <img src={slidOne} alt="" />

      </div>  
      <div className="card">
      <img src={slidOne} alt="" />

      </div>  
      <div className="card">
      <img src={slidOne} alt="" />

      </div>  
      {/* Add more cards */}
    </Slider>

    {/* <div className="Profileteam">
      <h1>Our Partners</h1>
    </div> */}
    </div>
 
  );
};

export default CardSlider3;