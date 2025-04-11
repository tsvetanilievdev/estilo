"use client"

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Link from 'next/link';
import { IoLeafOutline, IoHeartOutline, IoSparklesOutline, IoPeopleOutline } from 'react-icons/io5';

export default function About() {
  // Ценности на центъра с икони
  const values = [
    {
      title: "Естественост",
      description: "Работим за подчертаване на естествената ви красота, без прекалени промени.",
      icon: <IoLeafOutline className="w-10 h-10 text-[#8A1253]" />
    },
    {
      title: "Професионализъм",
      description: "Всички наши специалисти са сертифицирани и с богат опит в областта си.",
      icon: <IoSparklesOutline className="w-10 h-10 text-[#8A1253]" />
    },
    {
      title: "Индивидуален подход",
      description: "Всеки клиент получава персонално внимание и план според нуждите си.",
      icon: <IoHeartOutline className="w-10 h-10 text-[#8A1253]" />
    },
    {
      title: "Екипна работа",
      description: "Нашият екип работи заедно, за да постигне най-добри резултати за вас.",
      icon: <IoPeopleOutline className="w-10 h-10 text-[#8A1253]" />
    }
  ];

  // Оборудване и технологии
  const equipment = [
    {
      name: "LPG Апарат",
      description: "Най-нова генерация апарат за липомасаж и скулптуриране на тялото.",
      image: "/images/equipment-lpg.jpg"
    },
    {
      name: "Лазер SHR",
      description: "Модерен лазер за безболезнена и ефективна епилация.",
      image: "/images/equipment-laser.jpg"
    },
    {
      name: "Радиочестотен апарат",
      description: "Технология за подмладяване на кожата и лифтинг ефект.",
      image: "/images/equipment-rf.jpg"
    }
  ];

  return (
    <main>
      <Header />
      <Breadcrumbs />
      
      {/* Главна секция */}
      <section className="pt-16 pb-16 px-4 bg-gradient-to-b from-[#FBDAE0]/20 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#8A1253] mb-6">За нас</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">Козметичен център "Естило" - вашият професионален партньор в грижата за красотата и здравето.</p>
        </div>
      </section>

      {/* История и мисия */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-serif text-[#8A1253] mb-6">Нашата история</h2>
              <p className="text-gray-600 mb-4">
                Козметичен център "Естило" отвори врати през 2018 година в сърцето на град Търговище с мисията да предоставя висококачествени козметични услуги, съчетаващи най-модерните технологии с персонален подход към всеки клиент.
              </p>
              <p className="text-gray-600 mb-4">
                Създаден от екип професионалисти с богат опит в областта на козметологията, центърът бързо се утвърди като водеща дестинация за красота и релаксация в града.
              </p>
              <p className="text-gray-600">
                Нашата мисия е да помагаме на нашите клиенти да се чувстват и изглеждат най-добре, като подчертаваме естествената им красота и предлагаме персонализирана грижа, съобразена с индивидуалните им нужди.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/about-image.webp" 
                alt="Козметичен център Естило" 
                className="w-full h-auto"
                style={{maxHeight: "500px", objectFit: "cover"}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="py-16 px-4 bg-[#FBDAE0]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-[#8A1253] mb-10 text-center">Нашите ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif text-[#8A1253] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Оборудване и технологии */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-[#8A1253] mb-10 text-center">Нашето оборудване</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover" 
                  />
                </div>
                <h3 className="text-xl font-serif text-[#8A1253] mb-3">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Галерия */}
      <section className="py-16 px-4 bg-[#FBDAE0]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-[#8A1253] mb-10 text-center">Нашият център</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src={`/images/gallery/center-${item}.jpg`} 
                  alt={`Снимка на центъра ${item}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="bg-[#8A1253] hover:bg-[#7A0B43] text-white py-3 px-6 rounded-full transition duration-300">
              Вижте още снимки
            </Link>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 px-4 bg-[#8A1253] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Готови ли сте да изпитате нашите услуги?</h2>
          <p className="mb-8 max-w-3xl mx-auto">
            Запазете своя час още днес и открийте истинския смисъл на релаксацията и красотата в Козметичен Център Естило.
          </p>
          <Link href="/contact" className="bg-white text-[#8A1253] hover:bg-gray-100 py-3 px-6 rounded-full transition duration-300">
            Запазете час
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 