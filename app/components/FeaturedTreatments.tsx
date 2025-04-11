import React from 'react';
import { IoLeafOutline, IoWaterOutline, IoBodyOutline, IoFlaskOutline,
         IoHandLeftOutline, IoHeartOutline, IoExtensionPuzzleOutline, IoHappyOutline } from 'react-icons/io5';

const FeaturedTreatments = () => {
  // За снимките на конкретни процедури:
  // Размер: 800 x 600 px
  // Формат: WebP с JPEG резервен вариант
  const treatments = [
    {
      name: 'Масаж на тяло',
      description: 'Релаксиращ масаж за освобождаване от напрежението и стреса.',
      price: 85,
      icon: <IoBodyOutline className="w-5 h-5 md:w-6 md:h-6 text-[#8A1253]" />
      // image: '/services/body-massage.webp' - снимка: 800 x 600 px
    },
    {
      name: 'Почистване на лице',
      description: 'Дълбоко почистване за свежа и сияйна кожа на лицето.',
      price: 60,
      icon: <IoLeafOutline className="w-5 h-5 md:w-6 md:h-6 text-[#8A1253]" />
      // image: '/services/face-cleaning.webp' - снимка: 800 x 600 px
    },
    {
      name: 'Лазерна епилация',
      description: 'Трайно премахване на нежелано окосмяване с SHR технология.',
      price: 80,
      icon: <IoWaterOutline className="w-5 h-5 md:w-6 md:h-6 text-[#8A1253]" />
      // image: '/services/laser-epilation.webp' - снимка: 800 x 600 px
    },
    {
      name: 'Химически пилинг',
      description: 'Процедура за обновяване на кожата и изглаждане на бръчки.',
      price: 70,
      icon: <IoFlaskOutline className="w-5 h-5 md:w-6 md:h-6 text-[#8A1253]" />
      // image: '/services/chemical-peeling.webp' - снимка: 800 x 600 px
    },
    {
      name: 'LPG масаж',
      description: 'Моделиране на тялото и намаляване на целулита.',
      price: 45,
      icon: <IoHandLeftOutline className="w-5 h-5 md:w-6 md:h-6 text-[#8A1253]" />
      // image: '/services/lpg-massage.webp' - снимка: 800 x 600 px
    },
    {
      name: 'Микронидлинг',
      description: 'Стимулиране производството на колаген и еластин.',
      price: 60,
      icon: <IoHeartOutline className="w-5 h-5 md:w-6 md:h-6 text-[#8A1253]" />
      // image: '/services/microneedling.webp' - снимка: 800 x 600 px
    },
    {
      name: 'Мезотерапия',
      description: 'Неинвазивна процедура за подхранване на кожата.',
      price: 90,
      icon: <IoExtensionPuzzleOutline className="w-5 h-5 md:w-6 md:h-6 text-[#8A1253]" />
      // image: '/services/mesotherapy.webp' - снимка: 800 x 600 px
    },
    {
      name: 'Кола маска',
      description: 'Премахване на нежелани косми за гладка кожа.',
      price: 35,
      icon: <IoHappyOutline className="w-5 h-5 md:w-6 md:h-6 text-[#8A1253]" />
      // image: '/services/waxing.webp' - снимка: 800 x 600 px
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-sm uppercase text-gray-500 tracking-wider">Нашите процедури и цени</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="mr-2 md:mr-3">
                  {treatment.icon}
                </div>
                <h3 className="text-lg md:text-xl font-serif text-[#8A1253]">{treatment.name}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3 md:mb-4">{treatment.description}</p>
              <div className="text-[#8A1253] font-bold text-lg md:text-xl">
                {treatment.price} лв.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments; 