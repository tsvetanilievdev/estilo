import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ServicesOverview from './components/ServicesOverview';
import FeaturedTreatments from './components/FeaturedTreatments';
import Testimonials from './components/Testimonials';
import ContactInfo from './components/ContactInfo';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Естило Козметичен Център | Професионални козметични услуги в Търговище',
  description: 'Козметичен център Естило предлага професионални процедури за лице и тяло, лазерна епилация, масажи и микропигментация. Доверете се на нашия екип от специалисти.',
  keywords: 'козметичен център, Естило, Търговище, козметични процедури, лазерна епилация, масаж, LPG',
  openGraph: {
    title: 'Естило Козметичен Център | Професионални козметични услуги в Търговище',
    description: 'Козметичен център Естило предлага професионални процедури за лице и тяло, лазерна епилация, масажи и микропигментация.',
    url: 'https://estilo-cosmetic.bg',
    siteName: 'Естило Козметичен Център',
    images: [
      {
        url: 'https://estilo-cosmetic.bg/images/og-image.jpg', // Заменете с реален URL
        width: 1200,
        height: 630,
        alt: 'Естило Козметичен Център',
      },
    ],
    locale: 'bg_BG',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="bg-[#ededed]">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesOverview />
      <FeaturedTreatments />
      <Testimonials />
      <ContactInfo />
      <CallToAction />
      <Footer />
    </main>
  );
}
