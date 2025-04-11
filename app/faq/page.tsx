"use client"

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { IoChevronDownOutline, IoChevronUpOutline, IoSearchOutline } from 'react-icons/io5';
import Link from 'next/link';

export default function FAQ() {
  // Категории за често задавани въпроси
  const categories = [
    { id: 'all', name: 'Всички' },
    { id: 'general', name: 'Обща информация' },
    { id: 'procedures', name: 'Процедури' },
    { id: 'booking', name: 'Записване на час' },
    { id: 'payment', name: 'Плащане' },
  ];

  // FAQ въпроси с отговори
  const faqItems = [
    {
      id: 1,
      question: "Какви видове процедури предлагате в козметичен център Естило?",
      answer: "В козметичен център Естило предлагаме широка гама от процедури, включително процедури за лице (почистване на лице, химически пилинг, кислородна мезотерапия и др.), процедури за тяло (LPG, криолиполиза, кавитация), лазерна епилация, кола маска, микропигментация и различни видове масаж. За пълен списък на нашите услуги, можете да посетите страницата Услуги.",
      category: "general"
    },
    {
      id: 2,
      question: "Колко време продължават процедурите?",
      answer: "Продължителността на процедурите варира според вида на третирането. Процедурите за лице обикновено отнемат между 30 и 90 минути, процедурите за тяло между 30 и 60 минути, а лазерната епилация зависи от третираната област. При запазване на час, нашите специалисти ще ви информират за точната продължителност на процедурата.",
      category: "procedures"
    },
    {
      id: 3,
      question: "Как да запазя час за процедура?",
      answer: "Можете да запазите час по няколко начина: като се обадите на телефон 0897 696 021, чрез контактната форма на нашия уебсайт или като посетите козметичния център лично. Препоръчваме ви да запазвате час предварително, особено за по-популярните часове и процедури.",
      category: "booking"
    },
    {
      id: 4,
      question: "Какви методи на плащане приемате?",
      answer: "Приемаме плащане в брой и с карта (Visa, Mastercard) на място в центъра. За някои процедури се изисква капаро при запазване на час, което може да бъде платено както на място, така и чрез банков превод.",
      category: "payment"
    },
    {
      id: 5,
      question: "Мога ли да отменя или променя моя час?",
      answer: "Да, можете да отмените или промените вашия час. Молим ви да ни уведомите поне 24 часа предварително, за да можем да преструктурираме графика си. При по-късно отказване или непоявяване, може да ви бъде начислена такса за пропуснат час или да загубите капарото си.",
      category: "booking"
    },
    {
      id: 6,
      question: "Колко процедури са необходими, за да видя резултати?",
      answer: "Броят на необходимите процедури зависи от конкретния вид третиране и от индивидуалните особености на всеки клиент. За някои процедури, като почистване на лице, резултатите се виждат веднага след една процедура. За други, като лазерна епилация или антицелулитни третирания, обикновено са необходими серия от процедури (между 6 и 10) за постигане на оптимални резултати. Нашите специалисти ще ви дадат индивидуална препоръка след консултация.",
      category: "procedures"
    },
    {
      id: 7,
      question: "Има ли странични ефекти от процедурите?",
      answer: "Повечето козметични процедури са безопасни и с минимални странични ефекти. Възможно е да има временно зачервяване, лек оток или чувствителност на третираната зона след някои процедури, но тези реакции обикновено отзвучават бързо. Нашите специалисти винаги ще ви информират за възможните реакции и ще ви дадат инструкции за грижа след процедурата.",
      category: "procedures"
    },
    {
      id: 8,
      question: "Необходима ли е специална подготовка преди процедура?",
      answer: "За някои процедури е необходима специална подготовка. Например, преди лазерна епилация трябва да избягвате излагане на слънце и третиране с автобронзант, а зоната трябва да бъде избръсната (не скубана) 24 часа преди процедурата. За други процедури като химически пилинг, може да се наложи да прекратите употребата на определени козметични продукти няколко дни предварително. Нашите специалисти ще ви дадат конкретни инструкции при запазване на час.",
      category: "procedures"
    },
    {
      id: 9,
      question: "Какво представлява SHR технологията за лазерна епилация?",
      answer: "SHR (Super Hair Removal) е най-новата генерация в технологията за лазерна епилация. За разлика от традиционните методи, които работят основно чрез високоенергийни импулси и разрушаване на меланина, SHR използва постоянно движение и ниска енергия, която се натрупва постепенно и въздейства както на меланина, така и на стволовите клетки около фоликула. Това прави процедурата по-безболезнена, по-безопасна за всички типове кожа (включително тъмна и тен) и ефективна дори при светли и руси косми.",
      category: "procedures"
    },
    {
      id: 10,
      question: "Предлагате ли пакетни цени за процедури?",
      answer: "Да, предлагаме изгодни пакетни цени за серия от процедури. Например, при закупуване на пакет от 6 или 10 процедури лазерна епилация, антицелулитни третирания или други серийни процедури, получавате отстъпка от стандартната цена. За актуалните пакетни предложения, можете да се консултирате с нашите специалисти.",
      category: "payment"
    },
    {
      id: 11,
      question: "Какви козметични продукти използвате?",
      answer: "В козметичен център Естило използваме висококачествени професионални козметични продукти от утвърдени марки. Подбираме продуктите внимателно, като се съобразяваме с техния състав, ефективност и безопасност. Използваме продукти, подходящи за различни типове кожа и специфични проблеми, за да можем да предложим персонализирана грижа на всеки клиент.",
      category: "general"
    },
    {
      id: 12,
      question: "Има ли възрастови ограничения за процедурите?",
      answer: "Някои процедури имат възрастови ограничения. Например, лазерната епилация обикновено не се препоръчва за лица под 16 години без родителско съгласие. За подрастващи с проблемна кожа предлагаме специализирани третирания, адаптирани към техните нужди. Някои инвазивни или интензивни процедури може да не са подходящи за много възрастни клиенти или такива с определени здравословни проблеми. Нашите специалисти ще оценят индивидуално всеки случай по време на консултацията.",
      category: "procedures"
    },
    {
      id: 13,
      question: "Мога ли да използвам здравноосигурителен фонд или ваучери?",
      answer: "За момента не работим със здравноосигурителни фондове. Приемаме ваучери за козметични услуги от определени компании, с които имаме договор. Също така, от време на време предлагаме промоционални ваучери за подарък, които можете да закупите за вашите близки.",
      category: "payment"
    },
    {
      id: 14,
      question: "Какво да очаквам при първото си посещение?",
      answer: "При първото ви посещение ще бъдете посрещнати от нашия дружелюбен персонал. Ще ви помолим да попълните кратък формуляр с информация за вашето здравословно състояние и конкретни проблеми или цели. След това ще проведете консултация със специалист, който ще оцени вашите нужди и ще препоръча подходящи процедури. Ако имате запазен час за процедура, ще ви бъдат дадени инструкции и ще започнем веднага след консултацията.",
      category: "general"
    }
  ];

  // Стейт за търсене, избрана категория и отворени въпроси
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Филтриране на въпросите според търсенето и избраната категория
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Проверява дали въпросът е отворен
  const isItemOpen = (id: number) => openItems.includes(id);

  // Управлява отварянето/затварянето на въпрос
  const toggleItem = (id: number) => {
    if (isItemOpen(id)) {
      setOpenItems(openItems.filter(itemId => itemId !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <main>
      <Header />
      <Breadcrumbs />
      
      {/* Главна секция */}
      <section className="pt-16 pb-16 px-4 bg-gradient-to-b from-[#FBDAE0]/20 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#8A1253] mb-6">Често задавани въпроси</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Намерете отговори на най-често задаваните въпроси за нашите процедури, записване на час и методи на плащане.
          </p>
        </div>
      </section>

      {/* Търсачка и филтри */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Търсачка */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoSearchOutline className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Търсете във Често задавани въпроси..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8A1253]/50 focus:border-[#8A1253]"
            />
          </div>

          {/* Филтри по категории */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`py-2 px-5 rounded-full transition-all ${
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

      {/* Списък с въпроси */}
      <section className="py-8 px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                    <div className="ml-4 flex-shrink-0 text-[#8A1253]">
                      {isItemOpen(item.id) ? (
                        <IoChevronUpOutline className="h-5 w-5" />
                      ) : (
                        <IoChevronDownOutline className="h-5 w-5" />
                      )}
                    </div>
                  </button>
                  
                  {isItemOpen(item.id) && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 mb-4">Не са намерени резултати, отговарящи на вашето търсене.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="text-[#8A1253] hover:underline"
                >
                  Изчистете търсенето и филтрите
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Не намирате отговор? */}
      <section className="py-16 px-4 bg-[#FBDAE0]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#8A1253] mb-6">Не намирате отговор на своя въпрос?</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Свържете се с нас директно и ще ви отговорим възможно най-скоро.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#8A1253] text-white hover:bg-[#6d0f42] py-3 px-8 rounded-full transition duration-300"
          >
            Свържете се с нас
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 