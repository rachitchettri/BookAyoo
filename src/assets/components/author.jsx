import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Updated author data with names
const authors = [
  { name: 'Rachit Chettri', img: 'https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/453876436_3715826082020307_6817184540703509104_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bYXenHsBbbUQ7kNvgFmRFOs&_nc_ht=scontent.fbir1-1.fna&oh=00_AYCxxnMcBDXy5qwAxxSBUX1W6niglMe7i5cwG4AfMBCo0Q&oe=66CB513C' },
  { name: 'Rachit Chettri', img: 'https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/453876436_3715826082020307_6817184540703509104_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bYXenHsBbbUQ7kNvgFmRFOs&_nc_ht=scontent.fbir1-1.fna&oh=00_AYCxxnMcBDXy5qwAxxSBUX1W6niglMe7i5cwG4AfMBCo0Q&oe=66CB513C' },
  { name: 'Rachit Chettri', img: 'https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/453876436_3715826082020307_6817184540703509104_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bYXenHsBbbUQ7kNvgFmRFOs&_nc_ht=scontent.fbir1-1.fna&oh=00_AYCxxnMcBDXy5qwAxxSBUX1W6niglMe7i5cwG4AfMBCo0Q&oe=66CB513C' },
  // Add more author data as needed
];

const Author = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <div className="slick-arrow slick-next">→</div>,
    prevArrow: <div className="slick-arrow slick-prev">←</div>,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="m-10 relative py-20">
      <div className='text-2xl font-bold mb-1 font-sans'>
        <span>Bestselling Authors</span>
      </div>
      <div className='mb-8 text-gray-500 text-base'>
        <span>Discover Books by Bestselling Authors in Our Collection, Ranked by Popularity.</span>
      </div>
      <div className='relative'>
        <Slider {...settings}>
          {authors.map((author, index) => (
            <div key={index} className='flex flex-col justify-center items-center p-4'>
              <img src={author.img} alt={`Author ${index}`} className='w-24 h-24 rounded-full object-cover mb-2' />
              <span className='text-sm font-medium'>{author.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Author;

