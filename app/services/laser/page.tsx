"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { IoCheckmarkOutline, IoFlashOutline, IoHelpCircleOutline } from 'react-icons/io5';

export default function LaserEpilation() {
  // Данни за процедури за лазерна епилация
  const treatments = [
    {
      title: "SHR Лазерна епилация - малка зона",
      description: "Лице, брадичка, бикини линия, мишници, пръсти.",
      price: 40,
      duration: "20 мин.",
      image: "/images/services/laser-epilation.webp"
    },
    {
      title: "SHR Лазерна епилация - средна зона",
      description: "Ръце, гърди, корем, бикини, шия, интимна зона.",
      price: 80,
      duration: "30 мин.",
      image: "/images/services/laser-epilation.webp"
    },
    {
      title: "SHR Лазерна епилация - голяма зона",
      description: "Крака, гръб, цяло тяло.",
      price: 120,
      duration: "45 мин.",
      image: "/images/services/laser-epilation.webp"
    }
  ];

  // Често задавани въпроси
  const faqs = [
    {
      question: "Колко процедури са необходими за пълно премахване на окосмяването?",
      answer: "Обикновено са необходими 6-8 процедури на интервал от 4-6 седмици, за да се постигне дълготраен резултат. Точният брой зависи от индивидуалните особености на кожата и космите."
    },
    {
      question: "Болезнена ли е процедурата?",
      answer: "SHR технологията е най-щадящият метод за лазерна епилация. Повечето клиенти не изпитват болка, а само леко затопляне на третираната зона."
    },
    {
      question: "За кого е подходяща лазерната епилация?",
      answer: "Лазерната епилация е подходяща за почти всички типове кожа. Нашата SHR технология работи ефективно и при по-тъмна кожа и руси косми, които традиционно са предизвикателство за стандартните лазери."
    },
    {
      question: "Има ли странични ефекти?",
      answer: "Странични ефекти обикновено не се наблюдават или са минимални - леко зачервяване, което отминава до няколко часа. Важно е да се избягва излагане на пряка слънчева светлина преди и след процедурата."
    }
  ];

  // Предимства на SHR технологията
  const benefits = [
    "Безболезнена процедура благодарение на иновативната SHR технология",
    "Подходяща за всички типове кожа и окосмяване",
    "Ефективно премахва дори и руси и сиви косми",
    "Без риск от изгаряне или пигментация",
    "Бързи процедури с минимално време за възстановяване",
    "Дълготрайни резултати"
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#8A1253] mb-4">Лазерна епилация</h1>
              <p className="text-gray-600 mb-6">
                Забравете за нежеланото окосмяване с нашата съвременна SHR лазерна технология - безболезнена, ефективна и с дълготраен резултат. В Естило предлагаме най-модерния метод за трайно премахване на косми за всички типове кожа.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-[#8A1253] mb-2">SHR технология - предимства:</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Безболезнена процедура</span>
                  </li>
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Подходяща за всички типове кожа</span>
                  </li>
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Без риск от изгаряне</span>
                  </li>
                  <li className="flex items-start">
                    <IoCheckmarkOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span>Дълготрайни резултати</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/services/laser-epilation.webp" 
                alt="Лазерна епилация" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Как работи SHR технологията */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#8A1253] mb-8 text-center">Как работи SHR технологията?</h2>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  <strong className="text-[#8A1253]">SHR (Super Hair Removal)</strong> е най-новата и усъвършенствана технология за трайно премахване на окосмяване.
                </p>
                <p className="text-gray-600 mb-4">
                  За разлика от традиционните лазери, които разчитат на високи енергийни импулси, SHR използва постепенно и равномерно загряване на кожата и космените фоликули. Това осигурява:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <IoFlashOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span className="text-gray-600">По-безопасно третиране без риск от изгаряне</span>
                  </li>
                  <li className="flex items-start">
                    <IoFlashOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span className="text-gray-600">Ефективност при всички типове кожа, включително тъмна</span>
                  </li>
                  <li className="flex items-start">
                    <IoFlashOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span className="text-gray-600">Възможност за третиране и на по-светли косми</span>
                  </li>
                  <li className="flex items-start">
                    <IoFlashOutline className="text-[#8A1253] w-5 h-5 mt-0.5 mr-2" />
                    <span className="text-gray-600">Значително по-комфортно изживяване без болка</span>
                  </li>
                </ul>
                <p className="text-gray-600">
                  Кожата се охлажда по време на процедурата, което допълнително намалява дискомфорта и защитава повърхностния слой на кожата.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-[#FBDAE0]/20 p-6 rounded-full">
                  <IoFlashOutline className="text-[#8A1253] w-24 h-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Списък с процедури */}
      <section className="py-16 px-4 bg-[#FBDAE0]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#8A1253] mb-8 text-center">Нашите процедури и цени</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
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
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start">
              <IoHelpCircleOutline className="text-[#8A1253] w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Важна информация</h3>
                <p className="text-gray-600 mb-2">
                  За постигане на оптимални резултати, препоръчваме минимум 6-8 процедури на интервал от 4-6 седмици. Предлагаме и пакетни цени при закупуване на няколко процедури. За пълен ценоразпис и специални предложения, моля свържете се с нас.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block text-[#8A1253] font-medium hover:text-[#7A0B43] transition-colors"
                >
                  Свържете се за повече информация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ секция */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#8A1253] mb-8 text-center">Често задавани въпроси</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-[#8A1253] mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
              <h2 className="text-2xl md:text-3xl font-serif text-[#8A1253] mb-6">Защо да изберете лазерна епилация?</h2>
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
              <h3 className="font-semibold text-lg mb-4 text-[#8A1253]">Подготовка преди процедурата</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">1.</span>
                  <span>Избягвайте излагане на слънце 2 седмици преди процедурата</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">2.</span>
                  <span>Не използвайте депилиращи кремове 1 седмица преди процедурата</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">3.</span>
                  <span>Избръснете третираната зона 24 часа преди процедурата</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">4.</span>
                  <span>Не използвайте автобронзанти и продукти за изсветляване на кожата</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A1253] mr-2">5.</span>
                  <span>Информирайте ни за всякакви медикаменти, които приемате, и за кожни проблеми</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 px-4 bg-[#8A1253] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Готови за гладка кожа без нежелано окосмяване?</h2>
          <p className="mb-8 max-w-3xl mx-auto">
            Запазете вашата първа процедура по SHR лазерна епилация днес и се насладете на дълготрайни резултати и безболезнено третиране.
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