import React from 'react';
import Link from 'next/link';
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline } from 'react-icons/io5';

const ContactInfo = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Google Maps iframe */}
          <div className="rounded-lg overflow-hidden shadow-xl h-64 md:h-80 order-2 md:order-1">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.7219429424736!2d26.567594599999998!3d43.249444400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40af45ceb2156561%3A0x737df08c8f96680f!2z0JrQvtC30LzQtdGC0LjRh9C10L0g0YbQtdC90YLRitGAINCV0YHRgtC40LvQviwg0KLRitGA0LPQvtCy0LjRidC1INCm0LXQvdGC0YrRgCwg0YPQuy4g4oCe0KXRgNC40YHRgtC-INCR0L7RgtC10LLigJwgMTAsIDc3MDAg0KLRitGA0LPQvtCy0LjRidC1!5e0!3m2!1sbg!2sbg!4v1717874377363!5m2!1sbg!2sbg"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Местоположение на Естило Козметичен Център"
              className="w-full h-full"
            ></iframe>
          </div>
          
          {/* Contact Information */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8 text-[#8A1253]">Свържете се с нас</h2>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <div className="bg-[#8A1253] p-2 md:p-3 rounded-full mr-3 md:mr-4">
                  <IoLocationOutline className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-base md:text-lg text-[#8A1253]">Адрес</h3>
                  <p className="text-gray-600 text-sm md:text-base">ул. "Христо Ботев" 10, 7700 Търговище Център</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#8A1253] p-2 md:p-3 rounded-full mr-3 md:mr-4">
                  <IoCallOutline className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-base md:text-lg text-[#8A1253]">Телефон</h3>
                  <p className="text-gray-600 text-sm md:text-base">0897696021</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#8A1253] p-2 md:p-3 rounded-full mr-3 md:mr-4">
                  <IoTimeOutline className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-base md:text-lg text-[#8A1253]">Работно време</h3>
                  <p className="text-gray-600 text-sm md:text-base">Понеделник-Петък: 08:00-19:00</p>
                  <p className="text-gray-600 text-sm md:text-base">Събота: 10:00-16:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#8A1253] p-2 md:p-3 rounded-full mr-3 md:mr-4">
                  <IoMailOutline className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-base md:text-lg text-[#8A1253]">Имейл</h3>
                  <p className="text-gray-600 text-sm md:text-base">info@estilo.bg</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8">
              <Link href="/contact" className="bg-[#8A1253] hover:bg-[#7A0B43] text-white py-2 px-5 md:py-3 md:px-6 rounded-full transition duration-300 inline-block text-sm md:text-base">
                Контакти
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo; 