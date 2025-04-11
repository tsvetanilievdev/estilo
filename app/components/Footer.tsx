import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoLogoFacebook, IoLogoInstagram, IoPhonePortraitOutline, IoMailOutline, IoLocationOutline, IoTimeOutline } from 'react-icons/io5';

const Footer = () => {
  // Структурирани данни за LocalBusiness
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Естило Козметичен Център",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Христо Ботев 10",
      "addressLocality": "Търговище",
      "postalCode": "7700",
      "addressCountry": "BG"
    },
    "telephone": "+359897696021",
    "email": "info@estilo-cosmetic.bg",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "00:00"
      }
    ]
  };

  return (
    <footer className="bg-[#ededed] text-gray-600 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Секция 1: Лого и кратко описание */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="font-serif text-2xl text-[#8A1253] font-bold">ЕСТИЛО</span>
            </Link>
            <p className="text-sm mb-4">
              Козметичен център Естило предлага професионални процедури за лице и тяло, 
              лазерна епилация, масажи и други козметични услуги в Търговище.
            </p>
            <div className="social-icons mb-4">
              <a href="https://www.facebook.com/estilocosmetic" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <IoLogoFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/estilo_cosmetic" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <IoLogoInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Секция 2: Бързи връзки */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-[#8A1253]">Бързи връзки</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#8A1253] transition-colors">
                  За нас
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#8A1253] transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-[#8A1253] transition-colors">
                  Галерия
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 hover:text-[#8A1253] transition-colors">
                  Нашият екип
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#8A1253] transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Секция 3: Услуги */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-[#8A1253]">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/face" className="text-gray-600 hover:text-[#8A1253] transition-colors">
                  Процедури за лице
                </Link>
              </li>
              <li>
                <Link href="/services/body" className="text-gray-600 hover:text-[#8A1253] transition-colors">
                  Процедури за тяло
                </Link>
              </li>
              <li>
                <Link href="/services/laser" className="text-gray-600 hover:text-[#8A1253] transition-colors">
                  Лазерна епилация
                </Link>
              </li>
              <li>
                <Link href="/services/massage" className="text-gray-600 hover:text-[#8A1253] transition-colors">
                  Масажи
                </Link>
              </li>
              <li>
                <Link href="/services/waxing" className="text-gray-600 hover:text-[#8A1253] transition-colors">
                  Кола маска
                </Link>
              </li>
            </ul>
          </div>

          {/* Секция 4: Контакти */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-[#8A1253]">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <IoLocationOutline className="text-[#8A1253] mt-1 mr-2" />
                <span>ул. "Христо Ботев" 10, <br />7700 Търговище Център</span>
              </li>
              <li className="flex items-center">
                <IoPhonePortraitOutline className="text-[#8A1253] mr-2" />
                <a href="tel:0897696021" className="hover:text-[#8A1253] transition-colors">0897 696 021</a>
              </li>
              <li className="flex items-center">
                <IoMailOutline className="text-[#8A1253] mr-2" />
                <a href="mailto:info@estilo-cosmetic.bg" className="hover:text-[#8A1253] transition-colors">info@estilo-cosmetic.bg</a>
              </li>
              <li className="flex items-start">
                <IoTimeOutline className="text-[#8A1253] mt-1 mr-2" />
                <div>
                  <p>Понеделник-Петък: 08:00-19:00</p>
                  <p>Събота: 10:00-16:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Долен футър с авторски права */}
        <div className="border-t border-gray-300 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Естило Козметичен Център. Всички права запазени.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-[#8A1253] transition-colors">
                Политика за поверителност
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-[#8A1253] transition-colors">
                Общи условия
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </footer>
  );
};

export default Footer; 