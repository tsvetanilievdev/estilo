import './globals.css'
import type { Metadata } from "next";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Естило Козметичен Център | Търговище',
    template: '%s | Естило Козметичен Център'
  },
  description: 'Професионални козметични услуги, масажи и лазерна епилация в Търговище',
  keywords: ['козметичен център', 'Търговище', 'красота', 'естетична козметика', 'лазерна епилация'],
  authors: [{ name: 'Естило' }],
  creator: 'Естило Козметичен Център',
  publisher: 'Естило Козметичен Център',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Естило Козметичен Център",
              "image": "https://estilo-cosmetic.bg/images/logo.jpg", // заменете с реалния URL
              "url": "https://estilo-cosmetic.bg", // заменете с реалния URL
              "telephone": "+359897696021",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Христо Ботев 10",
                "addressLocality": "Търговище",
                "postalCode": "7700",
                "addressCountry": "BG"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "16:00"
                }
              ],
              "priceRange": "$$",
              "sameAs": [
                "https://www.facebook.com/estilocosmetic", // заменете с реалните URL
                "https://www.instagram.com/estilo_cosmetic"
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-[#ededed]`}
      >
        {children}
      </body>
    </html>
  );
}
