import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#8A1253] to-[#A02766] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Готови ли сте да се доверите на професионалистите?</h2>
        <p className="mb-8 text-white/90 max-w-3xl mx-auto">
          Запазете своя час още днес и се доверете на нашия екип от специалисти за вашата красота и добро самочувствие.
        </p>
        <Link 
          href="/contact" 
          className="bg-white text-[#8A1253] hover:bg-[#F5F9F7] py-3 px-8 rounded-full inline-block transition duration-300 font-medium"
        >
          Свържете се с нас
        </Link>
      </div>
    </section>
  );
};

export default CallToAction; 