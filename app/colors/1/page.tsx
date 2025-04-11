"use client"

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { IoLeafOutline, IoHeartOutline, IoSparklesOutline, IoChevronForward } from 'react-icons/io5';

export default function ColorVariant1() {
  // Услуги в Естило
  const services = [
    {
      title: 'Процедури за лице',
      description: 'Професионални процедури за лице, които почистват, регенерират и подмладяват.',
      icon: <IoSparklesOutline className="w-8 h-8 text-[#8A1253]" />,
      link: '/services/face'
    },
    {
      title: 'Процедури за тяло',
      description: 'Модерни методи за стягане, моделиране и подобряване вида на кожата.',
      icon: <IoLeafOutline className="w-8 h-8 text-[#8A1253]" />,
      link: '/services/body'
    },
    {
      title: 'Лазерна епилация',
      description: 'Трайно и безболезнено премахване на нежелано окосмяване.',
      icon: <IoHeartOutline className="w-8 h-8 text-[#8A1253]" />,
      link: '/services/laser'
    }
  ];

  return (
    <main className="bg-[#F8F6FF]"> {/* Светъл лавандулов фон */}
      <Header />
      
      {/* Герой секция */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2E6F6] to-[#EAE6FF]">
          <div className="absolute inset-0 opacity-20 bg-pattern-dots"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-serif text-[#8A1253] mb-4">
                Козметичен Център Естило
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                Ние Ви предлагаме широка гама от услуги и процедури, поднесени и изпълнени 
                с професионализъм, компетентност и индивидуален подход.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/services" 
                  className="bg-[#8A1253] hover:bg-[#7A0B43] text-white px-6 py-3 rounded-full transition duration-300"
                >
                  Нашите услуги
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-white text-[#8A1253] border border-[#8A1253] px-6 py-3 rounded-full transition duration-300"
                >
                  Контакти
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* За нас секция */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/about/about-image.webp" 
                alt="Козметичен Център Естило" 
                width={800}
                height={960}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[#8A1253]">
                За нас
              </h2>
              <p className="text-gray-700 mb-4">
                Нашият екип от специалисти работи с висококачествени продукти и съвременни технологии, за да постигне най-добрите резултати за вашата красота и здраве.
              </p>
              <p className="text-gray-700 mb-6">
                При нас ще получите индивидуален подход, професионална консултация и релаксираща атмосфера за пълноценно изживяване.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center text-[#8A1253] font-medium"
              >
                Научете повече <IoChevronForward className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги секция */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-[#F2E6F6]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4 text-[#8A1253]">Нашите услуги</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Предлагаме широк спектър от професионални услуги за вашата красота и здраве
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-[#FBDAE0]/30 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif mb-4 text-[#8A1253] text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <div className="text-center">
                  <Link 
                    href={service.link} 
                    className="inline-block text-[#8A1253] font-medium hover:text-[#7A0B43] transition-colors"
                  >
                    Научете повече
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 px-4 bg-[#FBDAE0]/20">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-6 text-[#8A1253]">Запазете час сега</h2>
            <p className="text-gray-700 mb-8">
              Отделете време за себе си и се насладете на професионални процедури в релаксираща атмосфера.
            </p>
            <Link 
              href="/contact" 
              className="bg-[#8A1253] hover:bg-[#7A0B43] text-white px-8 py-3 rounded-full transition duration-300"
            >
              Контакти
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 