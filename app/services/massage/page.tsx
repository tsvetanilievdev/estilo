"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { IoLeafOutline, IoWaterOutline, IoBodyOutline, IoHeartOutline, IoCheckmarkOutline } from 'react-icons/io5';

export default function Massage() {
  // Данни за видове масажи
  const massages = [
    {
      title: "Релаксиращ масаж",
      description: "Класически масаж за цялостно отпускане на тялото и намаляване на стреса.",
      price: 60,
      duration: "60 мин.",
      image: "/images/services/massage.webp",
      icon: <IoBodyOutline className="w-12 h-12 text-[#8A1253] opacity-70" />,
      benefits: [
        "Намалява напрежението и стреса",
        "Подобрява циркулацията",
        "Облекчава мускулни болки",
        "Стимулира имунната система"
      ]
    },
    {
      title: "Дълбокотъканен масаж",
      description: "Интензивен масаж, фокусиран върху облекчаване на мускулно напрежение и хронични болки.",
      price: 80,
      duration: "60 мин.",
      image: "/images/services/massage.webp",
      icon: <IoWaterOutline className="w-12 h-12 text-[#8A1253] opacity-70" />,
      benefits: [
        "Разрешава хронични болки",
        "Възстановява след спортни травми",
        "Коригира лоша стойка",
        "Намалява възпаления"
      ]
    },
    {
      title: "Антицелулитен масаж",
      description: "Специализиран масаж за борба с целулита и изглаждане на кожата.",
      price: 70,
      duration: "50 мин.",
      image: "/images/services/massage.webp",
      icon: <IoLeafOutline className="w-12 h-12 text-[#8A1253] opacity-70" />,
      benefits: [
        "Намалява целулит",
        "Стимулира лимфния дренаж",
        "Подобрява текстурата на кожата",
        "Засилва метаболизма"
      ]
    },
    {
      title: "Ароматерапевтичен масаж",
      description: "Релаксиращ масаж с използване на етерични масла за цялостно благосъстояние.",
      price: 75,
      duration: "60 мин.",
      image: "/images/services/massage.webp",
      icon: <IoHeartOutline className="w-12 h-12 text-[#8A1253] opacity-70" />,
      benefits: [
        "Релаксира тялото и ума",
        "Балансира емоциите",
        "Подхранва и хидратира кожата",
        "Подобрява качеството на съня"
      ]
    }
  ];

  // Общи ползи от масажа
  const benefits = [
    "Намалява мускулното напрежение и болка",
    "Подобрява кръвообращението и лимфния дренаж",
    "Облекчава стреса и тревожността",
    "Подобрява гъвкавостта и обхвата на движение",
    "Засилва имунната система",
    "Подпомага възстановяването след спортни травми"
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#8A1253] mb-4">Масажи</h1>
              <p className="text-gray-600 mb-6">
                Възстановете физическото и емоционалното си равновесие с нашите професионални масажни терапии. Предлагаме различни видове масажи, персонализирани според вашите индивидуални нужди за отпускане и възстановяване.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-[#8A1253] mb-2">Подходящи за всеки, който иска да:</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Намали стреса и напрежението</span>
                  </li>
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Облекчи мускулни болки</span>
                  </li>
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Подобри кръвообращението</span>
                  </li>
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Насладить се на релаксация</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/services/massage.webp" 
                alt="Масажи" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Видове масажи */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#8A1253] mb-12 text-center">Нашите масажни терапии</h2>
          
          {massages.map((massage, index) => (
            <div key={index} className={`mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} flex flex-col md:flex-row gap-8`}>
              <div className="md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src={massage.image} 
                    alt={massage.title} 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    {massage.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-[#8A1253] mb-3">{massage.title}</h3>
                  <p className="text-gray-600 mb-4">{massage.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#8A1253] font-bold text-xl">{massage.price} лв.</span>
                    <span className="text-gray-500">{massage.duration}</span>
                  </div>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-[#8A1253] hover:bg-[#7A0B43] text-white py-2 px-5 rounded-full transition duration-300"
                  >
                    Запазете час
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex items-center">
                <div className="bg-[#FBDAE0]/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-[#8A1253] mb-4">Ползи от {massage.title.toLowerCase()}</h4>
                  <ul className="space-y-3">
                    {massage.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ползи от масажите */}
      <section className="py-16 px-4 bg-[#FBDAE0]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-[#8A1253] mb-6">Общи ползи от масажа</h2>
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-[#8A1253]">Какво да очаквате при вашия първи масаж?</h3>
              <p className="text-gray-600 mb-4">
                Когато посетите Естило за масаж, ще бъдете посрещнати от нашите професионални масажисти, които ще ви помогнат да се отпуснете и ще отговорят на всичките ви въпроси.
              </p>
              <ol className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#8A1253] font-bold mr-2">1.</span>
                  <span>Кратка консултация за вашите конкретни нужди и очаквания</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] font-bold mr-2">2.</span>
                  <span>Подходяща атмосфера с приглушено осветление и релаксираща музика</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] font-bold mr-2">3.</span>
                  <span>Професионален масаж с индивидуален подход</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] font-bold mr-2">4.</span>
                  <span>Време за релаксация след процедурата</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] font-bold mr-2">5.</span>
                  <span>Съвети за поддържане на ефекта след масажа</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Препоръки */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#8A1253] mb-8 text-center">Препоръки за максимален ефект</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#FBDAE0]/30 rounded-full mr-4">
                  <IoWaterOutline className="text-[#8A1253] w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-[#8A1253]">Преди масажа</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Пийте много вода</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Избягвайте тежки храни преди процедурата</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Пристигнете 10-15 минути по-рано</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Информирайте терапевта за здравословни проблеми</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#FBDAE0]/30 rounded-full mr-4">
                  <IoBodyOutline className="text-[#8A1253] w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-[#8A1253]">По време на масажа</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Отпуснете се и дишайте дълбоко</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Комуникирайте относно натиска и комфорта</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Фокусирайте се върху релаксацията</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Не се притеснявайте, ако заспите</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#FBDAE0]/30 rounded-full mr-4">
                  <IoLeafOutline className="text-[#8A1253] w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-[#8A1253]">След масажа</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Хидратирайте се обилно</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Избягвайте тежки физически натоварвания</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Вземете топла вана с магнезиеви соли</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">•</span>
                  <span>Запазете час за следващ масаж</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 px-4 bg-[#8A1253] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Подарете си релаксация и здраве!</h2>
          <p className="mb-8 max-w-3xl mx-auto">
            Заслужавате да отделите време за себе си. Запазете своя час за масаж още днес и се доверете на нашите опитни терапевти да облекчат напрежението, да подобрят вашето здраве и да ви помогнат да се чувствате по-добре.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#8A1253] hover:bg-gray-100 py-3 px-6 rounded-full transition duration-300">
              Запазете час
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-full transition duration-300">
              Разгледайте всички услуги
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 