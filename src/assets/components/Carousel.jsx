import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme

import a1 from './a1.png';
import a2 from './a2.png';
import a3 from './a3.png';
import a4 from './a4.png';
import a5 from './a5.png';
import a6 from './a6.png';
import a7 from './a7.png'; // Your 7th image

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer z-10"
    onClick={onClick}
  >
    &gt;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer z-10"
    onClick={onClick}
  >
    &lt;
  </div>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Show 7 slides at a time
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // Adjust if needed
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="relative   max-w-screen-2xl mx-auto px-0">
      <Slider {...settings}>
        <div className="px-2">
          <img src={a1} alt="Slide 1" className="w-full h-auto rounded-lg object-cover" />
        </div>
        <div className="px-2">
          <img src={a2} alt="Slide 2" className="w-full h-auto rounded-lg object-cover" />
        </div>
        <div className="px-2">
          <img src={a3} alt="Slide 3" className="w-full h-auto rounded-lg object-cover" />
        </div>
        <div className="px-2">
          <img src={a4} alt="Slide 4" className="w-full h-auto rounded-lg object-cover" />
        </div>
        <div className="px-2">
          <img src={a5} alt="Slide 5" className="w-full h-auto rounded-lg object-cover" />
        </div>
        <div className="px-2">
          <img src={a6} alt="Slide 6" className="w-full h-auto rounded-lg object-cover" />
        </div>
        <div className="px-2">
          <img src={a7} alt="Slide 7" className="w-full h-auto rounded-lg object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
