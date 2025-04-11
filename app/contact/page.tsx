"use client"

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

export default function Contact() {
  // Стейт за формата за контакт
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Обработка на промяна в полетата на формата
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Обработка на изпращане на формата
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Тук в реалност бихме добавили интеграция с backend за изпращане на имейла
    // Симулираме забавяне при изпращане
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <main>
      <Header />
      <Breadcrumbs />
      
      {/* Главна секция */}
      <section className="pt-16 pb-16 px-4 bg-gradient-to-b from-[#FBDAE0]/20 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#8A1253] mb-6">Контакти</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Свържете се с нас за да запазите час или да получите повече информация за нашите услуги.
          </p>
        </div>
      </section>

      {/* Контактна информация и форма */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Лява колона - информация за контакт */}
            <div>
              <h2 className="text-3xl font-serif text-[#8A1253] mb-8">Нашите контакти</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <IoLocationOutline className="w-6 h-6 text-[#8A1253]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Адрес</h3>
                    <p className="text-gray-600">ул. "Христо Ботев" 10, 7700 Търговище Център</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <IoCallOutline className="w-6 h-6 text-[#8A1253]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Телефон</h3>
                    <p className="text-gray-600">
                      <a href="tel:0897696021" className="hover:text-[#8A1253]">0897 696 021</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <IoMailOutline className="w-6 h-6 text-[#8A1253]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Имейл</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@estilo.bg" className="hover:text-[#8A1253]">info@estilo.bg</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <IoTimeOutline className="w-6 h-6 text-[#8A1253]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Работно време</h3>
                    <p className="text-gray-600">Понеделник - Петък: 08:00 - 19:00</p>
                    <p className="text-gray-600">Събота: 10:00 - 16:00</p>
                    <p className="text-gray-600">Неделя: Затворено</p>
                  </div>
                </div>
              </div>
              
              {/* Карта */}
              <div className="mt-10">
                <h3 className="text-xl font-serif text-[#8A1253] mb-4">Намерете ни</h3>
                <div className="rounded-lg overflow-hidden shadow-md h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.6322746243987!2d26.57085597562861!3d43.2508193713743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40af03d6a3ec1651%3A0x400fff6dfd7b7d0!2sul.%20%22Hristo%20Botev%22%2010%2C%207700%20Targovishte%20Center%2C%20Targovishte%2C%20Bulgaria!5e0!3m2!1sen!2s!4v1701237681619!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Дясна колона - форма за контакт */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-serif text-[#8A1253] mb-6">Свържете се с нас</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <IoCheckmarkCircleOutline className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-green-800 mb-2">Благодарим ви за съобщението!</h3>
                  <p className="text-green-700">
                    Ще се свържем с вас възможно най-скоро. Очаквайте нашия отговор в рамките на 24 часа.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 py-2 px-4 bg-[#8A1253] text-white rounded-full hover:bg-[#6d0f42] transition-colors"
                  >
                    Изпратете ново съобщение
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Име и фамилия *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-[#8A1253]"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Имейл адрес *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-[#8A1253]"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Телефон *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-[#8A1253]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-gray-700 mb-2">Интересувате се от</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-[#8A1253]"
                    >
                      <option value="">Изберете услуга</option>
                      <option value="face">Процедури за лице</option>
                      <option value="body">Процедури за тяло</option>
                      <option value="laser">Лазерна епилация</option>
                      <option value="waxing">Кола маска</option>
                      <option value="micropigmentation">Микропигментация</option>
                      <option value="massage">Масаж</option>
                      <option value="other">Друго</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Съобщение *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-[#8A1253]"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 px-6 bg-[#8A1253] text-white rounded-full hover:bg-[#6d0f42] transition-colors disabled:bg-gray-400"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Изпращане...' : 'Изпратете съобщение'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Социални медии */}
      <section className="py-12 px-4 bg-[#FBDAE0]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#8A1253] mb-6">Последвайте ни</h2>
          <p className="text-gray-600 mb-8">
            Следвайте нас в социалните мрежи за най-новите ни оферти, съвети за красота и промоции.
          </p>
          
          <div className="flex justify-center gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#8A1253] text-white flex items-center justify-center hover:bg-[#6d0f42] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#8A1253] text-white flex items-center justify-center hover:bg-[#6d0f42] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#8A1253] text-white flex items-center justify-center hover:bg-[#6d0f42] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Често задавани въпроси */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-[#8A1253] mb-10 text-center">Често задавани въпроси</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Как мога да запазя час?</h3>
              <p className="text-gray-600">
                Можете да запазите час по телефона на 0897 696 021, чрез формата за контакт на нашия сайт или като ни посетите директно в центъра.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Трябва ли да се подготвя преди процедура?</h3>
              <p className="text-gray-600">
                За повечето процедури не е необходима специална подготовка. За някои специфични процедури, нашите специалисти ще ви дадат конкретни инструкции при запазване на час.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Какви методи на плащане приемате?</h3>
              <p className="text-gray-600">
                Приемаме плащане в брой и с карта (Visa, Mastercard) на място в центъра.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Мога ли да отменя или променя своя час?</h3>
              <p className="text-gray-600">
                Да, молим ви да ни уведомите поне 24 часа предварително, ако трябва да отмените или промените вашия час.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 