"use client"

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import Link from 'next/link';
import { IoCalendarOutline, IoPersonOutline, IoArrowBackOutline, IoShareSocialOutline } from 'react-icons/io5';
import { notFound } from 'next/navigation';
import Head from 'next/head';

// Примерни блог статии (В реалност тези данни биха идвали от CMS или API)
const blogPosts = [
  {
    id: 1,
    title: "5 ефективни начина за хидратиране на кожата през зимата",
    summary: "Зимата е предизвикателство за кожата - ниските температури навън и сухият въздух на отопляемите помещения често водят до дехидратация. Научете как да поддържате кожата си добре хидратирана през този сезон.",
    content: `
      <p>Зимата е може би най-трудният сезон за поддържане на здрава и хидратирана кожа. Студеният въздух навън, сухата атмосфера в отопляемите помещения и ниската влажност влияят негативно върху кожата, като я правят суха, опъната и склонна към раздразнения.</p>
      
      <p>Ето пет проверени начина за поддържане на кожата хидратирана през зимните месеци:</p>
      
      <h3>1. Избирайте богати, подхранващи кремове</h3>
      <p>През зимата е важно да преминете към по-богати и подхранващи формули. Търсете кремове, съдържащи хиалуронова киселина, глицерин, керамиди и натурални масла, които създават защитна бариера върху кожата и предотвратяват загубата на влага.</p>
      
      <h3>2. Не пропускайте слънцезащитния фактор</h3>
      <p>Въпреки че слънцето изглежда по-слабо през зимата, UV лъчите продължават да влияят на кожата и могат да причинят дехидратация и преждевременно стареене. Използвайте слънцезащитен крем с широк спектър на защита всеки ден.</p>
      
      <h3>3. Използвайте овлажнител за въздуха</h3>
      <p>Отоплението в затворени помещения понижава влажността на въздуха, което директно влияе върху хидратацията на кожата. Овлажнителите за въздух са чудесен начин да върнете малко влага в атмосферата и да помогнете на кожата си да запази хидратацията.</p>
      
      <h3>4. Направете си хидратираща маска за лице поне веднъж седмично</h3>
      <p>Хидратиращите маски за лице са концентрирани третирания, които доставят интензивна доза влага и подхранващи съставки дълбоко в кожата. Търсете маски с натурални съставки като алое вера, мед, хиалуронова киселина и растителни масла.</p>
      
      <h3>5. Не забравяйте хидратацията отвътре</h3>
      <p>Пийте достатъчно вода и консумирайте храни, богати на омега-3 мастни киселини и антиоксиданти, които помагат за поддържане на хидратацията на кожата отвътре. Включете в менюто си повече мазни риби, ядки, авокадо и зелени зеленчуци.</p>
      
      <p>Ако кожата ви продължава да бъде изключително суха въпреки тези мерки, препоръчваме да се консултирате с козметолог, който може да предложи професионални третирания, специално насочени към интензивно хидратиране през зимния сезон.</p>
      
      <p>В козметичен център "Естило" предлагаме различни хидратиращи процедури, включително кислородна мезотерапия и хидратиращи терапии с хиалуронова киселина, които могат да помогнат на кожата ви да преодолее зимната сухота.</p>
    `,
    image: "/images/blog/article-1.jpg",
    date: "15 Февруари 2024",
    author: "Мария Иванова",
    category: "face",
    slug: "hidratation-during-winter",
    relatedPosts: [4, 5]
  },
  {
    id: 2,
    title: "Всичко, което трябва да знаете за съвременната лазерна епилация",
    summary: "Съвременните методи за лазерна епилация са много по-ефективни и безболезнени от тези преди няколко години. Разберете каква е разликата между различните видове лазери и кой е най-подходящ за вашия тип кожа.",
    content: `
      <p>Лазерната епилация е една от най-популярните процедури за трайно отстраняване на нежеланото окосмяване. Технологията значително се е развила през последните години, предлагайки по-ефективни, по-бързи и по-комфортни решения.</p>
      
      <h3>Как работи лазерната епилация?</h3>
      <p>Лазерната епилация използва концентрирана светлинна енергия, която се абсорбира от пигмента в космените фоликули. Тази енергия се превръща в топлина, която уврежда фоликула и възпрепятства бъдещия растеж на косъма.</p>
      
      <h3>Видове лазери и тяхната ефективност</h3>
      <p>Съвременната лазерна епилация използва няколко основни типа лазери, всеки от които е подходящ за различни типове кожа и окосмяване:</p>
      <ul>
        <li><strong>Александритов лазер</strong> - подходящ за светла до маслинена кожа и тъмни косми.</li>
        <li><strong>Диоден лазер</strong> - ефективен за широк диапазон от типове кожа, включително по-тъмна кожа.</li>
        <li><strong>Nd:YAG лазер</strong> - най-безопасен за тъмна кожа, тъй като влияе по-малко върху меланина в кожата.</li>
        <li><strong>IPL (Интензивна пулсова светлина)</strong> - технически не е лазер, но работи на сходен принцип и е добър за по-големи зони.</li>
        <li><strong>SHR технология</strong> - по-нова техника, която използва по-ниска енергия, но с по-висока честота, което я прави по-комфортна и подходяща за всички типове кожа.</li>
      </ul>
      
      <h3>SHR технологията - най-новият метод в лазерната епилация</h3>
      <p>В козметичен център "Естило" използваме SHR (Super Hair Removal) технология, която представлява революция в лазерната епилация. За разлика от традиционните лазери, които таргетират само меланина в косъма, SHR въздейства и на стволовите клетки около фоликула, отговорни за растежа на косъма.</p>
      <p>Предимствата на SHR метода включват:</p>
      <ul>
        <li>Значително по-малко болезнена процедура</li>
        <li>Подходяща за всички типове кожа, включително тен и тъмна кожа</li>
        <li>Ефективна и за светли, руси и червени косми</li>
        <li>По-кратко време за възстановяване</li>
        <li>Минимален риск от странични ефекти</li>
      </ul>
      
      <h3>Подготовка за лазерна епилация</h3>
      <p>За да постигнете най-добри резултати от лазерната епилация, е важно да:</p>
      <ul>
        <li>Избягвате излагане на слънце поне 2 седмици преди процедурата</li>
        <li>Не скубете, не използвате кола маска или епилатор 4-6 седмици преди третирането</li>
        <li>Избръснете зоната 24 часа преди процедурата</li>
        <li>Не нанасяйте кремове, лосиони или дезодоранти в деня на процедурата</li>
      </ul>
      
      <h3>Колко сесии са необходими?</h3>
      <p>Броят на необходимите сесии зависи от няколко фактора, включително зоната на тялото, типа кожа, цвета и гъстотата на космите. Обикновено са нужни между 6 и 10 сесии, проведени на интервали от 4 до 8 седмици, за да се постигнат оптимални резултати.</p>
      
      <p>В козметичен център "Естило" предлагаме индивидуална консултация, на която оценяваме вашия тип кожа и окосмяване, за да определим най-подходящия план за лазерна епилация с SHR технология.</p>
    `,
    image: "/images/blog/article-2.jpg",
    date: "28 Януари 2024",
    author: "Николай Димитров",
    category: "hairRemoval",
    slug: "modern-laser-epilation",
    relatedPosts: [3, 5]
  }
  // Останалите статии тук...
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Намиране на статията по slug
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  // Ако статията не съществува, връщаме 404
  if (!post) {
    notFound();
  }
  
  // Намиране на свързаните статии
  const relatedPosts = post.relatedPosts 
    ? blogPosts.filter(related => post.relatedPosts?.includes(related.id)) 
    : [];

  // Структурирани данни за статията
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.date, // В реални данни използвайте ISO формат
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Естило Козметичен Център",
      "logo": {
        "@type": "ImageObject",
        "url": "https://estilo-cosmetic.bg/images/logo.jpg" // Заменете с реалния URL
      }
    },
    "description": post.summary,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://estilo-cosmetic.bg/blog/${post.slug}` // Заменете с реалния URL
    }
  };

  return (
    <>
      <Head>
        <title>{post.title} | Естило Козметичен Център</title>
        <meta name="description" content={post.summary} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://estilo-cosmetic.bg/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
        />
      </Head>
      
      <main>
        <Header />
        <Breadcrumbs />
        
        {/* Главна секция - заглавие на статията */}
        <section className="pt-16 pb-16 px-4 bg-gradient-to-b from-[#FBDAE0]/20 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#8A1253] mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <IoCalendarOutline className="mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <IoPersonOutline className="mr-1" />
                {post.author}
              </div>
            </div>
          </div>
        </section>

        {/* Съдържание на статията */}
        <section className="py-10 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Главна снимка на статията */}
            <div className="mb-10 rounded-lg overflow-hidden shadow-md">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto" 
              />
            </div>
            
            {/* Резюме */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                {post.summary}
              </p>
            </div>

            {/* Основно съдържание */}
            <div 
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#8A1253] prose-p:text-gray-700 prose-li:text-gray-700 mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Бутони за споделяне */}
            <div className="border-t border-b border-gray-200 py-6 my-10">
              <div className="flex justify-between items-center">
                <Link 
                  href="/blog" 
                  className="flex items-center text-[#8A1253] hover:text-[#6d0f42] transition-colors"
                >
                  <IoArrowBackOutline className="mr-2" />
                  Обратно към блога
                </Link>
                
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Споделете:</span>
                  <button className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Свързани статии */}
        {relatedPosts.length > 0 && (
          <section className="py-12 px-4 bg-[#FBDAE0]/10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif text-[#8A1253] mb-10 text-center">Свързани статии</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-60 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif text-[#8A1253] mb-3">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {relatedPost.summary.substring(0, 120)}...
                      </p>
                      
                      <Link 
                        href={`/blog/${relatedPost.slug}`}
                        className="inline-block text-[#8A1253] font-medium hover:text-[#6d0f42] transition-colors"
                      >
                        Прочетете повече →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA секция */}
        <section className="py-16 px-4 bg-[#8A1253] text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">Интересувате се от нашите услуги?</h2>
            <p className="mb-8 max-w-3xl mx-auto">
              Запазете час за консултация с нашите специалисти и открийте най-подходящите процедури за вас.
            </p>
            <Link href="/contact" className="bg-white text-[#8A1253] hover:bg-gray-100 py-3 px-6 rounded-full transition duration-300">
              Свържете се с нас
            </Link>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
} 