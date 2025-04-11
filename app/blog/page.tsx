"use client"

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Link from 'next/link';
import { IoCalendarOutline, IoPersonOutline } from 'react-icons/io5';

export default function Blog() {
  // Категории за блога
  const categories = [
    { id: 'all', name: 'Всички' },
    { id: 'face', name: 'Грижа за лице' },
    { id: 'body', name: 'Грижа за тяло' },
    { id: 'skin', name: 'Кожа' },
    { id: 'hairRemoval', name: 'Епилация' },
    { id: 'news', name: 'Новини' }
  ];

  // Примерни блог статии
  const blogPosts = [
    {
      id: 1,
      title: "5 ефективни начина за хидратиране на кожата през зимата",
      summary: "Зимата е предизвикателство за кожата - ниските температури навън и сухият въздух на отопляемите помещения често водят до дехидратация. Научете как да поддържате кожата си добре хидратирана през този сезон.",
      image: "/images/blog/article-1.jpg",
      date: "15 Февруари 2024",
      author: "Мария Иванова",
      category: "face",
      slug: "hidratation-during-winter"
    },
    {
      id: 2,
      title: "Всичко, което трябва да знаете за съвременната лазерна епилация",
      summary: "Съвременните методи за лазерна епилация са много по-ефективни и безболезнени от тези преди няколко години. Разберете каква е разликата между различните видове лазери и кой е най-подходящ за вашия тип кожа.",
      image: "/images/blog/article-2.jpg",
      date: "28 Януари 2024",
      author: "Николай Димитров",
      category: "hairRemoval",
      slug: "modern-laser-epilation"
    },
    {
      id: 3,
      title: "LPG Масаж - Вашият съюзник срещу целулита",
      summary: "LPG масажът е една от най-ефективните процедури за третиране на целулит и моделиране на тялото. Научете за ползите от тази процедура и как точно действа върху проблемните зони.",
      image: "/images/blog/article-3.jpg",
      date: "10 Януари 2024",
      author: "Елена Петрова",
      category: "body",
      slug: "lpg-massage-against-cellulite"
    },
    {
      id: 4,
      title: "Как да разпознаете вашия тип кожа и да изберете правилната грижа",
      summary: "Определянето на типа кожа е първата стъпка към избора на подходяща козметика и процедури. Разберете как да разпознаете дали имате суха, мазна, комбинирана или чувствителна кожа.",
      image: "/images/blog/article-4.jpg",
      date: "05 Декември 2023",
      author: "Мария Иванова",
      category: "skin",
      slug: "how-to-determine-your-skin-type"
    },
    {
      id: 5,
      title: "Естило вече предлага нови процедури за микронидлинг",
      summary: "С радост ви съобщаваме, че разширяваме списъка с предлаганите услуги и вече предлагаме процедури за микронидлинг. Тази ефективна техника стимулира естествената продукция на колаген в кожата.",
      image: "/images/blog/article-5.jpg",
      date: "20 Ноември 2023",
      author: "Екипът на Естило",
      category: "news",
      slug: "new-microneedling-procedures"
    },
  ];

  // Стейт за избрана категория
  const [activeCategory, setActiveCategory] = useState('all');

  // Филтриране на статиите според избраната категория
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main>
      <Header />
      <Breadcrumbs />
      
      {/* Главна секция */}
      <section className="pt-16 pb-16 px-4 bg-gradient-to-b from-[#FBDAE0]/20 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#8A1253] mb-6">Блог</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Полезни съвети, новини и информация за красотата, козметичните процедури и грижата за себе си.
          </p>
        </div>
      </section>

      {/* Категории */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`py-2 px-6 rounded-full transition-all ${
                  activeCategory === category.id 
                    ? 'bg-[#8A1253] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Блог постове */}
      <section className="py-8 px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <IoCalendarOutline className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <IoPersonOutline className="mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-[#8A1253] mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {post.summary}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-block text-[#8A1253] font-medium hover:text-[#6d0f42] transition-colors"
                  >
                    Прочетете повече →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">Няма налични статии в тази категория.</p>
            </div>
          )}
        </div>
      </section>

      {/* Абонамент за новини */}
      <section className="py-16 px-4 bg-[#FBDAE0]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#8A1253] mb-6">Абонирайте се за нашите новини</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Получавайте най-новите статии, съвети за красота и специални оферти директно във вашата електронна поща.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Вашият имейл адрес" 
                className="flex-grow py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#8A1253]"
              />
              <button className="py-3 px-6 bg-[#8A1253] text-white rounded-full hover:bg-[#6d0f42] transition-colors">
                Абонирай се
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 