// Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // Import file CSS

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    { src: 'http://localhost:3002/images/banner1.jpg', alt: 'LaLa Garden xin chào!' },
    { src: 'http://localhost:3002/images/banner2.jpg', alt: 'Cùng mua sắm ngay nào!' },
    { src: 'http://localhost:3002/images/banner3.jpg', alt: 'Hình ảnh 3' },
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: '100%', height: '500px', margin: '0 auto' }}
            />
            {/* Bỏ phần overlay và text */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
