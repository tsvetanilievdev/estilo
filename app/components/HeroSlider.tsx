"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    pauseOnHover: false,
    fade: true,
  };

  // Слайдове за главния слайдер
  // Всички изображения трябва да бъдат с размер 1920 x 1080 px
  // формат: WebP с JPEG/PNG резервен вариант
  const slides = [
    {
      title: "Същността на естествената красота",
      subtitle: "Неповторимо изживяване",
      backgroundImage: "/images/hero-section.png", // Размер: 1920 x 1080 px
      showSocialIcons: true
    },
    {
      title: "Масаж и СПА",
      subtitle: "Изпитайте истинска релаксация",
      backgroundImage: "/images/slide2.jpg", // Размер: 1920 x 1080 px
      showSocialIcons: true
    },
    {
      title: "Професионални процедури",
      subtitle: "За вашата красота и здраве",
      backgroundImage: "/images/slide3.jpg", // Размер: 1920 x 1080 px
      showSocialIcons: true
    }
  ];

  return (
    <div className="relative">
      <Slider {...settings} className="slick-container">
        {slides.map((slide, index) => (
          <div key={index} className="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] relative">
            <div 
              className="h-full w-full flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(120, 0, 122, 0.5)), url('${slide.backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="text-center text-white z-10 px-4 max-w-md md:max-w-xl">
                <h2 className="text-sm sm:text-lg md:text-xl uppercase tracking-wider mb-2 md:mb-3">{slide.subtitle}</h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6">{slide.title}</h1>
                <Link href="/services" className="bg-[#8A1253] hover:bg-[#7A0B43] text-white py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300 text-sm md:text-base">
                  Научете повече
                </Link>
              </div>
              
              {slide.showSocialIcons && (
                <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12 z-20 flex gap-4">
                  <a href="https://www.facebook.com/estilo.cosmetic.center" target="_blank" rel="noopener noreferrer"
                     className="bg-white rounded-full p-2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform hover:scale-110">
                    <FaFacebook className="text-[#8A1253] w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a href="https://www.instagram.com/estilo.cosmetic.center" target="_blank" rel="noopener noreferrer"
                     className="bg-white rounded-full p-2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform hover:scale-110">
                    <FaInstagram className="text-[#8A1253] w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider; 