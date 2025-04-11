"use client"

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { IoStarOutline, IoSparklesOutline, IoFlameOutline, IoHeartOutline } from 'react-icons/io5';

export default function ColorVariant3() {
  // Основни предимства
  const benefits = [
    {
      title: "Професионален екип",
      description: "Нашите специалисти са с богат опит и постоянно усъвършенстване",
      icon: <IoStarOutline className="w-10 h-10 text-[#8A1253]" />
    },
    {
      title: "Съвременни технологии",
      description: "Работим с най-модерни апарати и козметични продукти",
      icon: <IoSparklesOutline className="w-10 h-10 text-[#8A1253]" />
    },
    {
      title: "Персонален подход",
      description: "Всеки клиент получава индивидуална консултация и грижа",
      icon: <IoHeartOutline className="w-10 h-10 text-[#8A1253]" />
    }
  ];

  // Популярни процедури
  const popularServices = [
    {
      title: "Лазерна епилация",
      description: "Премахване на нежеланото окосмяване с модерни SHR технологии",
      price: "от 40 лв.",
      image: "/images/services/laser-epilation.webp",
      link: "/services/laser" 
    },
    {
      title: "Химичен пилинг",
      description: "Процедура за ексфолиация и подмладяване на кожата",
      price: "от 70 лв.",
      image: "/images/services/facial-treatments.webp",
      link: "/services/face" 
    },
    {
      title: "Антицелулитен масаж",
      description: "Ефективна терапия за намаляване на целулита",
      price: "от 70 лв.",
      image: "/images/services/massage.webp",
      link: "/services/massage" 
    }
  ];

  return (
    <main className="bg-white">
      <Header />
      
      {/* Герой секция */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#FFEEE2] opacity-50 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FBDAE0]/20 -z-10 rounded-bl-[100px]"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#8A1253] mb-6 leading-tight">
                Грижа за вашата красота и самочувствие
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Открийте света на професионалните козметични процедури в Естило, където красотата се съчетава с комфорт и внимание към всеки детайл.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/services" 
                  className="bg-[#8A1253] hover:bg-[#7A0B43] text-white px-8 py-4 rounded-lg transition duration-300 shadow-md"
                >
                  Открийте нашите услуги
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-white text-[#8A1253] border border-[#8A1253] px-8 py-4 rounded-lg transition duration-300 shadow-md hover:bg-[#FBDAE0]/10"
                >
                  Свържете се с нас
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-[-30px] left-[-30px] w-20 h-20 bg-[#FBDAE0] rounded-full -z-10"></div>
              <div className="absolute bottom-[-20px] right-[-40px] w-32 h-32 bg-[#FFEEE2] rounded-full -z-10"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="/images/about/about-image.webp" 
                  alt="Козметичен Център Естило" 
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Декоративни елементи */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white -z-10" style={{clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0% 100%)'}}></div>
      </section>

      {/* Секция с предимства */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#8A1253] mb-4">Защо да изберете нас?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Приоритизираме качеството на нашите услуги и грижата за вашето здраве и красота
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#FEF8F5] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-white p-4 inline-block mb-6 shadow-md">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif text-[#8A1253] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Секция с популярни услуги */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#FFEEE2]/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#8A1253] mb-4">Популярни процедури</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Разгледайте нашите най-търсени козметични услуги
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {popularServices.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-72">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-[#FBDAE0] font-medium mb-1">{service.price}</p>
                    <h3 className="text-xl font-serif mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{service.description}</p>
                    <Link 
                      href={service.link} 
                      className="inline-block text-white border-b border-[#FBDAE0] hover:text-[#FBDAE0] transition-colors"
                    >
                      Научете повече →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-block bg-[#FBDAE0] text-[#8A1253] px-8 py-4 rounded-lg hover:bg-[#8A1253] hover:text-white transition-colors shadow-md"
            >
              Вижте всички услуги
            </Link>
          </div>
        </div>
      </section>

      {/* За нас секция */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute top-[-40px] right-[-40px] w-80 h-80 bg-[#FFEEE2] rounded-full -z-10"></div>
              <div className="relative z-10">
                <Image 
                  src="/images/hero-section.png" 
                  alt="За нас" 
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#8A1253] mb-6">За Естило</h2>
              <p className="text-gray-600 mb-4">
                Козметичен център Естило е създаден с мисълта да предлага висококачествени процедури в уютна и релаксираща обстановка. Нашият екип от професионалисти е отдаден на грижата за вашата красота и здраве.
              </p>
              <p className="text-gray-600 mb-6">
                С индивидуален подход към всеки клиент и използването на най-съвременни технологии, ние гарантираме отлични резултати и пълно удовлетворение.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-[#FFEEE2] text-[#8A1253] px-6 py-3 rounded-lg hover:bg-[#FBDAE0] transition-colors"
              >
                Научете повече за нас
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#8A1253] to-[#A02766]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">Започнете своето преобразяване днес</h2>
              <p className="text-white/80 mb-0 md:pr-12">
                Свържете се с нас за консултация или запазете час за процедура
              </p>
            </div>
            <div className="md:col-span-2 flex justify-start md:justify-end">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-[#8A1253] px-8 py-4 rounded-lg hover:bg-[#FFEEE2] transition-colors shadow-lg"
              >
                Запазете час сега
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 