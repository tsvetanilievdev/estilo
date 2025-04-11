"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Предотвратяване на scroll на body когато мобилното меню е отворено
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: 'Начало', path: '/' },
    { title: 'За нас', path: '/about' },
    { title: 'Услуги', path: '/services' },
    { title: 'Екип', path: '/team' },
    { title: 'Галерия', path: '/gallery' },
    { title: 'Блог', path: '/blog' },
    { title: 'Контакти', path: '/contact' },
    { title: 'ЧЗВ', path: '/faq' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3 md:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="z-10">
          <h1 className={`text-2xl md:text-3xl font-serif ${isScrolled ? 'text-[#8A1253]' : 'text-white'}`}>
            ESTILO
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 lg:space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.path} 
                  className={`font-medium text-sm lg:text-base transition-colors ${
                    isScrolled ? 'text-[#8A1253] hover:text-[#7A0B43]' : 'text-white hover:text-[#FBDAE0]'
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-10"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Затвори меню" : "Отвори меню"}
        >
          {isMenuOpen ? (
            <IoCloseOutline className={`w-7 h-7 md:w-8 md:h-8 ${isScrolled ? 'text-[#8A1253]' : 'text-white'}`} />
          ) : (
            <IoMenuOutline className={`w-7 h-7 md:w-8 md:h-8 ${isScrolled ? 'text-[#8A1253]' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-[#8A1253] flex flex-col items-center justify-center
          transition-all duration-300 md:hidden
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}>
          <nav>
            <ul className="flex flex-col items-center space-y-5">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="text-white text-xl font-medium hover:text-[#FBDAE0]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 