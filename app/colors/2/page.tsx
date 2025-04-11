"use client"

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { IoWaterOutline, IoFlowerOutline, IoHeartOutline, IoArrowForward } from 'react-icons/io5';

export default function ColorVariant2() {
  // Информация за секциите на услуги
  const featuredServices = [
    {
      title: "Процедури за лице",
      description: "Открийте нашите специализирани процедури за лице, които хидратират, подмладяват и възстановяват сиянието на кожата.",
      image: "/images/services/facial-treatments.webp",
      link: "/services/face"
    },
    {
      title: "Лазерна епилация",
      description: "Трайно решение за нежелано окосмяване с най-модерната безболезнена SHR технология.",
      image: "/images/services/laser-epilation.webp",
      link: "/services/laser"
    },
    {
      title: "Масажи",
      description: "Релаксиращи и терапевтични масажи, които премахват стреса и възстановяват баланса на тялото.",
      image: "/images/services/massage.webp",
      link: "/services/massage"
    }
  ];

  return (
    <main className="bg-[#F5F9F7]"> {/* Светъл мента-зелен фон */}
      <Header />
      
      {/* Герой секция */}
      <section className="bg-gradient-to-b from-[#E5F4EF] to-[#F5F9F7] py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block text-[#8A1253] bg-[#FBDAE0]/30 px-4 py-1 rounded-full text-sm mb-4">
                Козметичен център
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#444444] mb-6">
                <span className="text-[#8A1253]">Естило</span> - 
                <br />твоят път към 
                <br />естествената красота
              </h1>
              <p className="text-gray-600 mb-8 md:pr-12">
                Открийте изключителни козметични процедури, изпълнени с професионализъм и внимание към детайла.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/services" 
                  className="bg-[#8A1253] hover:bg-[#7A0B43] text-white px-6 py-3 rounded-full transition duration-300 flex items-center"
                >
                  Разгледайте услугите <IoArrowForward className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute top-[-20px] left-[-20px] w-64 h-64 rounded-full bg-[#FBDAE0]/30 -z-10"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/hero-section.png" 
                  alt="Козметичен Център Естило" 
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute bottom-[-30px] right-[-15px] w-40 h-40 rounded-full bg-[#E5F4EF] -z-10 border border-[#FBDAE0]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с виды услуги */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#8A1253] mb-4">Нашите услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Предлагаме високо качество и разнообразие от процедури, съобразени с индивидуалните нужди на всеки клиент
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-1 bg-[#E5F4EF]">
                <div className="p-6 flex justify-center">
                  <IoFlowerOutline className="text-[#8A1253] w-14 h-14" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#8A1253] mb-3">Процедури за лице</h3>
                <p className="text-gray-600 mb-5">
                  Почистване, микронидлинг, химични пилинги, мезотерапия и други специализирани процедури.
                </p>
                <Link 
                  href="/services/face" 
                  className="inline-block text-[#8A1253] font-medium hover:text-[#7A0B43]"
                >
                  Научете повече →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-1 bg-[#E5F4EF]">
                <div className="p-6 flex justify-center">
                  <IoWaterOutline className="text-[#8A1253] w-14 h-14" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#8A1253] mb-3">Процедури за тяло</h3>
                <p className="text-gray-600 mb-5">
                  LPG масаж, антицелулитни програми, кавитация и модерни методи за оформяне на тялото.
                </p>
                <Link 
                  href="/services/body" 
                  className="inline-block text-[#8A1253] font-medium hover:text-[#7A0B43]"
                >
                  Научете повече →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-1 bg-[#E5F4EF]">
                <div className="p-6 flex justify-center">
                  <IoHeartOutline className="text-[#8A1253] w-14 h-14" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#8A1253] mb-3">Лазерна епилация</h3>
                <p className="text-gray-600 mb-5">
                  Безболезнена и ефективна технология за трайно премахване на нежелано окосмяване.
                </p>
                <Link 
                  href="/services/laser" 
                  className="inline-block text-[#8A1253] font-medium hover:text-[#7A0B43]"
                >
                  Научете повече →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Избрани услуги */}
      <section className="py-20 px-4 bg-[#E5F4EF]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#8A1253] mb-4">Избрани процедури</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Нашите най-търсени и ефективни козметични услуги
            </p>
          </div>

          <div className="space-y-16">
            {featuredServices.map((service, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'order-1 md:order-2' : 'order-1'}>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'order-2 md:order-1' : 'order-2'}>
                  <h3 className="text-2xl font-serif text-[#8A1253] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    href={service.link} 
                    className="inline-block bg-white text-[#8A1253] border border-[#FBDAE0] px-6 py-3 rounded-full hover:bg-[#FBDAE0] transition duration-300"
                  >
                    Разгледайте
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#8A1253] to-[#A02766]">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-6 text-white">Готови за преобразяване?</h2>
            <p className="text-white/80 mb-8">
              Запазете час за консултация или процедура и поверете грижата за вашата красота в ръцете на нашите специалисти.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-[#8A1253] hover:bg-[#F5F9F7] px-8 py-3 rounded-full transition duration-300"
            >
              Свържете се с нас
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 