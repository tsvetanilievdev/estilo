import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

const AboutSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-6 md:mb-8">
        <span className="text-sm uppercase text-gray-500 tracking-wider">Основна информация за нас</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
          {/* Снимка за секция "За нас" */}
          <Image 
            src="/images/about/about-image.webp" 
            alt="Козметичен Център Естило" 
            width={800}
            height={960}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        
        <div className="order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 md:mb-6 text-[#8A1253]">
            Козметичен Център Естило
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
            Ние Ви предлагаме широка гама от услуги и процедури, поднесени и изпълнени с професионализъм, компетентност и индивидуален подход!
          </p>
          <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
            Нашият екип от специалисти работи с висококачествени продукти и съвременни технологии, за да постигне най-добрите резултати за вашата красота и здраве.
          </p>
          
          <div className="flex items-center justify-between">
            <Link 
              href="/about" 
              className="inline-block bg-[#8A1253] hover:bg-[#7A0B43] text-white py-2 px-4 rounded-full transition-colors text-sm"
            >
              Научете повече за нас
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 