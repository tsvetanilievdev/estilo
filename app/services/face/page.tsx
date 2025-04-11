"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { IoCheckmarkOutline, IoInformationCircleOutline, IoHelpBuoyOutline } from 'react-icons/io5';

export default function FaceTreatments() {
  // Данни за процедури за лице
  const treatments = [
    {
      title: "Почистване на лице",
      description: "Дълбоко почистване, премахване на комедони и хидратация.",
      price: 60,
      duration: "60 мин.",
      image: "/images/services/facial-treatments.webp"
    },
    {
      title: "Химически пилинг",
      description: "Процедура за ексфолиация, подмладяване и подобряване на текстурата на кожата.",
      price: 70,
      duration: "45 мин.",
      image: "/images/services/facial-treatments.webp"
    },
    {
      title: "Радиочестотен лифтинг",
      description: "Неинвазивен лифтинг за стягане на кожата на лицето.",
      price: 90,
      duration: "50 мин.",
      image: "/images/services/facial-treatments.webp"
    },
    {
      title: "Мезотерапия",
      description: "Инжектиране на витамини и хиалуронова киселина за подхранване на кожата.",
      price: 120,
      duration: "40 мин.",
      image: "/images/services/facial-treatments.webp"
    },
    {
      title: "Jetpeel",
      description: "Безболезнена процедура с кислород и хранителни вещества за по-млада кожа.",
      price: 90,
      duration: "45 мин.",
      image: "/images/services/facial-treatments.webp"
    },
    {
      title: "Микронидлинг",
      description: "Стимулиране на естественото производство на колаген и еластин в кожата.",
      price: 80,
      duration: "60 мин.",
      image: "/images/services/facial-treatments.webp"
    }
  ];

  // Ползи от процедурите за лице
  const benefits = [
    "Възстановява сиянието и младежкия вид на кожата",
    "Премахва фини линии и бръчки",
    "Хидратира в дълбочина",
    "Намалява пигментните петна и акне",
    "Подобрява текстурата и еластичността",
    "Стимулира производството на колаген"
  ];

  return (
    <main>
      <Header />
      <Breadcrumbs />
      
      {/* Заглавна секция */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-[#FBDAE0]/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#8A1253] mb-4">Процедури за лице</h1>
              <p className="text-gray-600 mb-6">
                Нашите професионални процедури за лице са специално разработени да възвърнат младежкото сияние на вашата кожа. С комбинация от най-модерни технологии и натурални съставки, ще се погрижим за всички проблеми на кожата на лицето.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-[#8A1253] mb-2">Идеални решения за:</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Бръчки и фини линии</span>
                  </li>
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Пигментация и неравномерен тен</span>
                  </li>
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Акне и белези</span>
                  </li>
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Отпусната и уморена кожа</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/services/facial-treatments.webp" 
                alt="Процедури за лице" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Списък с процедури */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#8A1253] mb-8 text-center">Нашите процедури за лице</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <Image 
                    src={treatment.image} 
                    alt={treatment.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#8A1253] mb-2">{treatment.title}</h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8A1253] font-bold text-lg">{treatment.price} лв.</span>
                    <span className="text-gray-500">{treatment.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ползи секция */}
      <section className="py-16 px-4 bg-[#FBDAE0]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-[#8A1253] mb-6">Какви са ползите от процедурите за лице?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#8A1253] p-1 rounded-full mr-3 mt-1">
                      <IoCheckmarkOutline className="text-white w-4 h-4" />
                    </div>
                    <p className="text-gray-600">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <IoInformationCircleOutline className="text-[#8A1253] w-6 h-6 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Полезна информация</h3>
                    <p className="text-gray-600">
                      Препоръчваме да правите професионална процедура за лице поне веднъж месечно, за да поддържате кожата си здрава и сияйна. Между процедурите е важно да поддържате правилна ежедневна грижа за кожата.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <IoHelpBuoyOutline className="text-[#8A1253] w-6 h-6 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Нуждаете се от съвет?</h3>
                    <p className="text-gray-600 mb-4">
                      Не сте сигурни коя процедура е подходяща за вашия тип кожа? Нашите специалисти са на ваше разположение за консултация.
                    </p>
                    <Link 
                      href="/contact" 
                      className="inline-block bg-[#8A1253] hover:bg-[#7A0B43] text-white py-2 px-4 rounded-full transition duration-300"
                    >
                      Свържете се с нас
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 px-4 bg-[#8A1253] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Готови ли сте за преобразяване?</h2>
          <p className="mb-8 max-w-3xl mx-auto">
            Запазете час за една от нашите професионални процедури за лице и се доверете на експертите да върнат младежкото сияние на кожата ви.
          </p>
          <Link href="/contact" className="bg-white text-[#8A1253] hover:bg-gray-100 py-3 px-6 rounded-full transition duration-300">
            Запазете час сега
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 