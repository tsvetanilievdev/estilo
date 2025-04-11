"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { IoCheckmarkOutline, IoTimeOutline, IoStarOutline } from 'react-icons/io5';

export default function BodyTreatments() {
  // Данни за процедури за тяло
  const treatments = [
    {
      title: "LPG масаж",
      description: "Механичен масаж за моделиране на тялото и лимфодренаж.",
      price: 45,
      duration: "30 мин.",
      image: "/images/services/body-treatments.webp"
    },
    {
      title: "EmShape Body Sculpting",
      description: "Високоинтензивно фокусирано електромагнитно поле за изгаряне на мазнини и изграждане на мускули.",
      price: 120,
      duration: "40 мин.",
      image: "/images/services/body-treatments.webp"
    },
    {
      title: "Криолиполиза",
      description: "Охлаждане на мастни клетки за премахване на локализирани мазнини.",
      price: 150,
      duration: "60 мин.",
      image: "/images/services/body-treatments.webp"
    },
    {
      title: "Ударно-вълнова терапия",
      description: "Ефективен метод за борба с целулита и стягане на кожата.",
      price: 100,
      duration: "45 мин.",
      image: "/images/services/body-treatments.webp"
    },
    {
      title: "Кавитация",
      description: "Ултразвуково разбиване на мастните клетки и целулита.",
      price: 90,
      duration: "40 мин.",
      image: "/images/services/body-treatments.webp"
    },
    {
      title: "Hifu Body",
      description: "Високо интензивен фокусиран ултразвук за стягане на кожата и оформяне на тялото.",
      price: 180,
      duration: "50 мин.",
      image: "/images/services/body-treatments.webp"
    }
  ];

  // Ползи от процедурите за тяло
  const benefits = [
    "Намаляване на целулита",
    "Редуциране на локализирани мастни натрупвания",
    "Стягане на отпусната кожа",
    "Лимфен дренаж и детоксикация",
    "Подобряване на кръвообращението",
    "Намаляване на обиколки и моделиране на фигурата"
  ];

  // Пакетни предложения
  const packages = [
    {
      title: "Антицелулитна програма",
      description: "Комбинация от процедури за ефективна борба с целулита",
      treatments: ["LPG масаж x 5", "Ударно-вълнова терапия x 3", "Кавитация x 2"],
      price: 350,
      savings: 100
    },
    {
      title: "Програма за отслабване",
      description: "Комплексен подход за отслабване и моделиране на тялото",
      treatments: ["EmShape x 3", "Криолиполиза x 2", "LPG масаж x 5"],
      price: 550,
      savings: 180
    }
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#8A1253] mb-4">Процедури за тяло</h1>
              <p className="text-gray-600 mb-6">
                Процедурите за тяло в Естило са специално разработени за оформяне на силуета, намаляване на целулита и подобряване на общия външен вид. Използваме най-модерните технологии за постигане на видими и дълготрайни резултати.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-[#8A1253] mb-2">Ефективни решения за:</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Целулит и стрии</span>
                  </li>
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Локализирани мастни натрупвания</span>
                  </li>
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Отпусната кожа след бременност или отслабване</span>
                  </li>
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Задържане на течности и подпухналост</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/services/body-treatments.webp" 
                alt="Процедури за тяло" 
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
          <h2 className="text-2xl md:text-3xl font-serif text-[#8A1253] mb-8 text-center">Нашите процедури за тяло</h2>
          
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
                    <div className="flex items-center text-gray-500">
                      <IoTimeOutline className="mr-1" />
                      <span>{treatment.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Пакетни оферти */}
      <section className="py-16 px-4 bg-[#FBDAE0]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#8A1253] mb-8 text-center">Пакетни предложения</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#8A1253]">
                <h3 className="text-2xl font-serif text-[#8A1253] mb-3">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Включва:</h4>
                  <ul className="space-y-2">
                    {pkg.treatments.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#8A1253] font-bold text-2xl">{pkg.price} лв.</span>
                    <span className="text-gray-500 text-sm ml-2">Спестявате {pkg.savings} лв.</span>
                  </div>
                  <Link 
                    href="/contact" 
                    className="bg-[#8A1253] hover:bg-[#7A0B43] text-white py-2 px-4 rounded-full transition duration-300"
                  >
                    Резервирай
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ползи секция */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-serif text-[#8A1253] mb-6">Ползи от процедурите за тяло</h2>
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
            <div className="bg-white p-6 rounded-lg shadow-md order-1 md:order-2">
              <div className="flex items-start mb-4">
                <IoStarOutline className="text-[#8A1253] w-6 h-6 mr-3 mt-1" />
                <h3 className="font-semibold text-lg">Съвети за максимални резултати</h3>
              </div>
              <p className="text-gray-600 mb-4">
                За да постигнете най-добри резултати от процедурите за тяло, препоръчваме:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Поддържайте балансирано хранене и адекватна хидратация</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Включете умерена физическа активност в ежедневието си</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Спазвайте препоръчителния брой процедури и интервал между тях</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Избягвайте консумацията на алкохол и тютюневи изделия</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 px-4 bg-[#8A1253] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Започнете своята трансформация днес!</h2>
          <p className="mb-8 max-w-3xl mx-auto">
            Нашите специалисти ще създадат персонализирана програма според вашите индивидуални нужди и цели. Запазете консултация сега и направете първата стъпка към тялото, което винаги сте искали.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#8A1253] hover:bg-gray-100 py-3 px-6 rounded-full transition duration-300">
              Запазете час
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-full transition duration-300">
              Вижте всички услуги
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 