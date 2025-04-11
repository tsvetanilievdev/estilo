"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoChatbubbleOutline } from 'react-icons/io5';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: "slick-dots testimonial-dots",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  const testimonials = [
    {
      quote: "Можете да бъдете прекрасни на тридесет, шармантни на четиридесет и неустоими през останала част от живота ви!",
      name: "Коко Шанел",
      position: ""
    },
    {
      quote: "Процедурите при тях винаги са на високо ниво. След всяко посещение се чувствам обновена и заредена с енергия!",
      name: "Мария Петрова",
      position: "Редовен клиент"
    },
    {
      quote: "Най-доброто място за лазерна епилация в града. Бързо, безболезнено и с дълготраен ефект. Препоръчвам!",
      name: "Елена Димитрова",
      position: "Редовен клиент"
    },
    {
      quote: "Изключителни професионалисти! Процедурите за лице са невероятни, кожата ми изглежда по-млада и свежа.",
      name: "Иван Георгиев",
      position: "Нов клиент"
    },
    {
      quote: "Посещавам Естило вече година за процедури за тяло и резултатите са впечатляващи. Благодаря на целия екип!",
      name: "Силвия Тодорова",
      position: "Клиент"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#FBDAE0]/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <IoChatbubbleOutline className="w-16 h-16 text-[#8A1253] mx-auto opacity-30" />
        </div>
        <div className="px-0 md:px-4 pb-16">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 md:px-4 pb-6">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md h-full">
                  <p className="text-gray-600 italic mb-6 text-sm md:text-base">"{testimonial.quote}"</p>
                  <div className="border-t pt-4 border-gray-200">
                    <h4 className="text-lg font-semibold text-[#8A1253]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <style jsx global>{`
          .testimonial-dots {
            bottom: -40px !important;
          }
          .testimonial-dots li button:before {
            color: #8A1253 !important;
          }
          .testimonial-dots li.slick-active button:before {
            color: #8A1253 !important;
            opacity: 1 !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials; 