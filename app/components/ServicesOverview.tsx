import React from 'react';
import Link from 'next/link';
import { IoBrushOutline, IoHandRightOutline, IoFlameOutline } from 'react-icons/io5';

const ServicesOverview = () => {
  // За снимките на категории услуги:
  // Размер: 600 x 400 px
  // Формат: WebP с JPEG резервен вариант
  const services = [
    {
      title: 'Процедури за лице',
      description: 'Предлагаме различни третирания за лице, включително почистване, пилинг, мезотерапия, микронидлинг и други процедури за подмладяване и красива кожа.',
      icon: <IoBrushOutline className="w-8 h-8 md:w-10 md:h-10 text-[#8A1253]" />,
      link: '/services/face' // Снимка за тази категория: /services/face-treatments.webp
    },
    {
      title: 'Процедури за тяло',
      description: 'Нашите процедури за тяло включват LPG, антицелулитни масажи, липолазер, кавитация и други съвременни методи за оформяне на тялото.',
      icon: <IoHandRightOutline className="w-8 h-8 md:w-10 md:h-10 text-[#8A1253]" />,
      link: '/services/body' // Снимка за тази категория: /services/body-treatments.webp
    },
    {
      title: 'Лазерна епилация',
      description: 'Премахване на нежеланото окосмяване с модерни SHR технологии, осигуряващи дълготраен ефект и комфорт по време на процедурата.',
      icon: <IoFlameOutline className="w-8 h-8 md:w-10 md:h-10 text-[#8A1253]" />,
      link: '/services/laser' // Снимка за тази категория: /services/laser-epilation.webp
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-[#FBDAE0]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center transition-transform hover:translate-y-[-5px]">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-[#8A1253]">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-5 md:mb-6">{service.description}</p>
              <Link 
                href={service.link} 
                className="inline-block text-[#8A1253] font-medium hover:text-[#7A0B43] transition-colors"
              >
                Научете повече
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview; 