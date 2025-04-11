"use client"

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Image from 'next/image';

export default function Gallery() {
  // Категории за галерията
  const categories = [
    { id: 'all', name: 'Всички' },
    { id: 'center', name: 'Центърът' },
    { id: 'treatments', name: 'Процедури' },
    { id: 'results', name: 'Резултати' }
  ];
  
  // Масив със снимки за галерията
  const images = [
    {
      id: 1,
      src: "/images/gallery/center-1.jpg",
      alt: "Рецепция на центъра",
      category: "center"
    },
    {
      id: 2,
      src: "/images/gallery/center-2.jpg",
      alt: "Кабинет за процедури",
      category: "center"
    },
    {
      id: 3,
      src: "/images/gallery/center-3.jpg",
      alt: "Спа зона",
      category: "center"
    },
    {
      id: 4,
      src: "/images/gallery/center-4.jpg",
      alt: "Чакалня",
      category: "center"
    },
    {
      id: 5,
      src: "/images/gallery/center-5.jpg",
      alt: "Помещение за лазерна епилация",
      category: "center"
    },
    {
      id: 6,
      src: "/images/gallery/center-6.jpg",
      alt: "Помещение за третиране на тяло",
      category: "center"
    },
    {
      id: 7,
      src: "/images/gallery/treatment-1.jpg",
      alt: "Почистване на лице",
      category: "treatments"
    },
    {
      id: 8,
      src: "/images/gallery/treatment-2.jpg",
      alt: "Масаж на тяло",
      category: "treatments"
    },
    {
      id: 9,
      src: "/images/gallery/treatment-3.jpg",
      alt: "Лазерна епилация",
      category: "treatments"
    },
    {
      id: 10,
      src: "/images/gallery/treatment-4.jpg",
      alt: "LPG масаж",
      category: "treatments"
    },
    {
      id: 11,
      src: "/images/gallery/result-1.jpg",
      alt: "Резултат от третиране на кожа",
      category: "results"
    },
    {
      id: 12,
      src: "/images/gallery/result-2.jpg",
      alt: "Резултат от третиране на тяло",
      category: "results"
    }
  ];

  // Стейт за избрана категория
  const [activeCategory, setActiveCategory] = useState('all');

  // Филтриране на изображенията според избраната категория
  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  return (
    <main>
      <Header />
      <Breadcrumbs />
      
      {/* Главна секция */}
      <section className="pt-16 pb-16 px-4 bg-gradient-to-b from-[#FBDAE0]/20 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#8A1253] mb-6">Галерия</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Разгледайте нашите помещения, процедури и резултати от третирания.
          </p>
        </div>
      </section>

      {/* Филтриране по категории */}
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

      {/* Галерия със снимки */}
      <section className="py-8 px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">Няма налични изображения в тази категория.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA секция */}
      <section className="py-16 px-4 bg-[#8A1253] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Харесва ли ви това, което виждате?</h2>
          <p className="mb-8 max-w-3xl mx-auto">
            Запазете своя час за консултация и процедура в Козметичен Център Естило още днес.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-[#8A1253] hover:bg-gray-100 py-3 px-6 rounded-full transition duration-300"
          >
            Запазете час
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 