'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbsProps {
  customItems?: { label: string; path: string }[];
  homeLabel?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  customItems, 
  homeLabel = 'Начало' 
}) => {
  const pathname = usePathname();
  
  // Ако има персонализирани елементи, използваме тях
  const items = customItems || generateBreadcrumbItems(pathname, homeLabel);

  return (
    <nav className="bg-[#FBDAE0]/10 py-3 px-4">
      <div className="max-w-6xl mx-auto">
        <ol className="flex flex-wrap items-center">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <li className="text-gray-400 mx-2">
                  <span>/</span>
                </li>
              )}
              <li>
                {index === items.length - 1 ? (
                  <span className="text-[#8A1253] font-medium">{item.label}</span>
                ) : (
                  <Link 
                    href={item.path} 
                    className="text-gray-600 hover:text-[#8A1253] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </div>
    </nav>
  );
};

// Функция за генериране на елементите на навигацията въз основа на текущия път
function generateBreadcrumbItems(
  pathname: string, 
  homeLabel: string
): { label: string; path: string }[] {
  // Ако сме на началната страница, показваме само "Начало"
  if (pathname === '/') {
    return [{ label: homeLabel, path: '/' }];
  }

  // Разделяме пътя на сегменти
  const segments = pathname
    .split('/')
    .filter(segment => segment)
    .map(segment => segment.toLowerCase());

  // Изграждаме елементите на навигацията
  const items = [{ label: homeLabel, path: '/' }];
  
  // Мапинг за преобразуване на URL сегменти в български етикети
  const segmentLabels: Record<string, string> = {
    about: 'За нас',
    services: 'Услуги',
    face: 'Процедури за лице',
    body: 'Процедури за тяло',
    laser: 'Лазерна епилация',
    waxing: 'Кола маска',
    micropigmentation: 'Микропигментация',
    massage: 'Масаж',
    team: 'Екип',
    gallery: 'Галерия',
    blog: 'Блог',
    contact: 'Контакти',
    faq: 'Често задавани въпроси'
  };

  let currentPath = '';
  segments.forEach(segment => {
    currentPath += `/${segment}`;
    const label = segmentLabels[segment] || segment;
    items.push({ label, path: currentPath });
  });

  return items;
}

export default Breadcrumbs; 