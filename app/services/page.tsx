"use client"

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Link from 'next/link';
import { IoBodyOutline, IoWomanOutline, IoFlashOutline, IoWaterOutline, IoBrushOutline, IoHandRightOutline } from 'react-icons/io5';

export default function Services() {
  // Категории услуги
  const serviceCategories = [
    {
      title: "Процедури за лице",
      description: "Професионална грижа за вашата кожа с модерни технологии и качествени продукти.",
      icon: <IoWomanOutline className="w-16 h-16 text-[#8A1253]" />,
      image: "/images/services/face-treatments.webp",
      slug: "/services/face",
      treatments: [
        "Почистване на лице",
        "Jetpeel",
        "Химически пилинг",
        "Радиочестотен лифтинг",
        "Wish Pro",
        "Мезотерапия",
        "и още..."
      ]
    },
    {
      title: "Процедури за тяло",
      description: "Ефективни решения за оформяне на тялото и борба с целулита.",
      icon: <IoBodyOutline className="w-16 h-16 text-[#8A1253]" />,
      image: "/images/services/body-treatments.webp",
      slug: "/services/body",
      treatments: [
        "LPG",
        "EmShape body sculpting",
        "Криолиполиза",
        "Ударно-вълнова терапия",
        "Кавитация",
        "Липолазер",
        "Hifu body"
      ]
    },
    {
      title: "Лазерна епилация",
      description: "Безболезнено и ефективно премахване на нежеланото окосмяване.",
      icon: <IoFlashOutline className="w-16 h-16 text-[#8A1253]" />,
      image: "/images/services/laser-epilation.webp",
      slug: "/services/laser",
      treatments: [
        "SHR Лазерна епилация - малка зона",
        "SHR Лазерна епилация - средна зона",
        "SHR Лазерна епилация - голяма зона"
      ]
    },
    {
      title: "Кола маска",
      description: "Традиционен метод за премахване на нежеланото окосмяване с дълготраен резултат.",
      icon: <IoWaterOutline className="w-16 h-16 text-[#8A1253]" />,
      image: "/images/services/waxing.webp",
      slug: "/services/waxing",
      treatments: [
        "Кола маска - лице",
        "Кола маска - крака",
        "Кола маска - ръце",
        "Кола маска - бикини"
      ]
    },
    {
      title: "Микропигментация",
      description: "Перманентен грим за вежди и устни с естествен вид.",
      icon: <IoBrushOutline className="w-16 h-16 text-[#8A1253]" />,
      image: "/images/services/micropigmentation.webp",
      slug: "/services/micropigmentation",
      treatments: [
        "Микропигментация на вежди",
        "Микропигментация на устни"
      ]
    },
    {
      title: "Масаж",
      description: "Релаксиращи и възстановяващи масажи за тялото и духа.",
      icon: <IoHandRightOutline className="w-16 h-16 text-[#8A1253]" />,
      image: "/images/services/massage.webp",
      slug: "/services/massage",
      treatments: [
        "Масаж на тяло",
        "Спортен масаж"
      ]
    }
  ];

  return (
    <main>
      <Header />
      <Breadcrumbs />
      
      {/* Главна секция */}
      <section className="pt-16 pb-16 px-4 bg-gradient-to-b from-[#FBDAE0]/20 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#8A1253] mb-6">Нашите услуги</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Козметичен център "Естило" предлага широка гама от професионални козметични услуги, изпълнени с внимание към детайла и ориентирани към резултата.
          </p>
        </div>
      </section>

      {/* Категории услуги */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-[#8A1253]/20 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-serif text-[#8A1253] mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="mb-6 text-gray-600">
                    {category.treatments.slice(0, 4).map((treatment, i) => (
                      <li key={i} className="flex items-center mb-1">
                        <span className="w-2 h-2 bg-[#FBDAE0] rounded-full mr-2"></span>
                        {treatment}
                      </li>
                    ))}
                    {category.treatments.length > 4 && (
                      <li className="text-[#8A1253] italic mt-1">и още...</li>
                    )}
                  </ul>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <Link 
                    href={category.slug} 
                    className="block w-full text-center bg-[#8A1253] hover:bg-[#7A0B43] text-white py-3 px-6 rounded-full transition duration-300"
                  >
                    Вижте всички
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Информационна секция */}
      <section className="py-16 px-4 bg-[#FBDAE0]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-serif text-[#8A1253] mb-6">Защо да изберете нас?</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 mt-1 text-[#8A1253]">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Професионално обслужване</h3>
                    <p className="text-gray-600">Квалифицирани специалисти с дългогодишен опит в козметичната индустрия</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1 text-[#8A1253]">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Модерно оборудване</h3>
                    <p className="text-gray-600">Използваме само най-новите и ефективни технологии за вашата красота</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1 text-[#8A1253]">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Индивидуален подход</h3>
                    <p className="text-gray-600">Всяка процедура е персонализирана според нуждите на вашата кожа</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1 text-[#8A1253]">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Качествени продукти</h3>
                    <p className="text-gray-600">Работим само с проверени и висококачествени козметични марки</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="hidden md:block rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/services-overview.jpg" 
                alt="Професионални козметични услуги" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 px-4 bg-[#8A1253] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Не чакайте повече!</h2>
          <p className="mb-8 max-w-3xl mx-auto">
            Запазете час за консултация или процедура още днес и се доверете на нашия екип от професионалисти.
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