"use client"

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Link from 'next/link';
import { IoMedicalOutline, IoSchoolOutline, IoTimeOutline, IoHeartOutline } from 'react-icons/io5';
import Image from 'next/image';

export default function Team() {
  // Списък със специалисти
  const specialists = [
    {
      name: "Мария Иванова",
      position: "Старши козметолог и директор на центъра",
      image: "/images/team/maria-ivanova.webp",
      qualifications: "Магистърска степен по козметология, 12 години опит",
      specializations: "Процедури за лице, подмладяващи процедури, лазерни процедури",
      bio: "Мария основа Козметичен Център Естило с визията да предложи висококачествени козметични услуги в Търговище. Нейното обширно обучение включва сертификати от академии по красота в Париж и Милано."
    },
    {
      name: "Елена Петрова",
      position: "Специалист по третиране на тяло",
      image: "/images/team/elena-petrova.webp",
      qualifications: "Сертифицирана по напреднали техники за скулптуриране на тялото, 8 години опит",
      specializations: "LPG процедури, антицелулитна терапия, контуриране на тялото",
      bio: "Страстта на Елена да помага на клиентите да постигнат целите си за тялото е двигателят зад непрекъснатото ѝ обучение в най-новите технологии за третиране на тялото."
    },
    {
      name: "Николай Димитров",
      position: "Лазерен специалист",
      image: "/images/team/nikolay-dimitrov.webp",
      qualifications: "Сертифициран за работа с лазер, 5 години опит",
      specializations: "Лазерна епилация, подмладяване на кожата",
      bio: "Прецизността и вниманието към детайла правят Николай изключителен лазерен специалист. Той гарантира, че всеки клиент получава безопасни и ефективни процедури."
    }
  ];

  return (
    <main>
      <Header />
      <Breadcrumbs />
      
      {/* Главна секция */}
      <section className="pt-16 pb-16 px-4 bg-gradient-to-b from-[#FBDAE0]/20 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#8A1253] mb-6">Нашият екип</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Запознайте се с нашите специалисти, посветени на вашата красота и благополучие.
          </p>
        </div>
      </section>

      {/* Въведение за екипа */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-[#8A1253] mb-6">Експертност и отдаденост</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              В Естило нашият екип от професионалисти е обединен от една обща мисия - да предоставя 
              изключителни козметични услуги, които подчертават естествената ви красота и повишават 
              вашето самочувствие. Всеки член на нашия екип притежава богат опит, постоянно се обучава 
              в най-новите техники и технологии, и се отнася с внимание и грижа към всеки клиент.
            </p>
          </div>
        </div>
      </section>

      {/* Профили на специалистите */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {specialists.map((specialist, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={specialist.image} 
                    alt={specialist.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-[#8A1253] mb-2">{specialist.name}</h3>
                  <p className="text-gray-500 font-medium mb-4">{specialist.position}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm uppercase tracking-wider text-gray-600 mb-2">Квалификации</h4>
                    <p className="text-gray-700">{specialist.qualifications}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm uppercase tracking-wider text-gray-600 mb-2">Специализации</h4>
                    <p className="text-gray-700">{specialist.specializations}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-600 mb-2">За специалиста</h4>
                    <p className="text-gray-700">{specialist.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ключови качества */}
      <section className="py-16 px-4 bg-[#FBDAE0]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-[#8A1253] mb-10 text-center">Какво ни отличава</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <IoMedicalOutline className="w-10 h-10 text-[#8A1253]" />
              </div>
              <h3 className="text-xl font-serif text-[#8A1253] mb-3">Експертен опит</h3>
              <p className="text-gray-600">Всички наши специалисти имат професионално образование и сертификации в своята област.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <IoSchoolOutline className="w-10 h-10 text-[#8A1253]" />
              </div>
              <h3 className="text-xl font-serif text-[#8A1253] mb-3">Постоянно обучение</h3>
              <p className="text-gray-600">Нашият екип редовно участва в обучения за най-новите техники и технологии.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <IoTimeOutline className="w-10 h-10 text-[#8A1253]" />
              </div>
              <h3 className="text-xl font-serif text-[#8A1253] mb-3">Отдаденост</h3>
              <p className="text-gray-600">Посвещаваме време да разберем вашите нужди и да създадем персонализиран план за грижа.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <IoHeartOutline className="w-10 h-10 text-[#8A1253]" />
              </div>
              <h3 className="text-xl font-serif text-[#8A1253] mb-3">Грижа за клиента</h3>
              <p className="text-gray-600">Вярваме, че отношението към клиента е толкова важно, колкото и самата процедура.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 px-4 bg-[#8A1253] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Искате ли консултация с нашите специалисти?</h2>
          <p className="mb-8 max-w-3xl mx-auto">
            Нашият екип е готов да отговори на вашите въпроси и да предложи персонализирано решение за вашите нужди.
          </p>
          <Link href="/contact" className="bg-white text-[#8A1253] hover:bg-gray-100 py-3 px-6 rounded-full transition duration-300">
            Свържете се с нас
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 