import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Villani Sports Group | Aggregated Sponsorship for Canadian Hockey',
  description: 'VSG organizes and aggregates Canadian hockey into centralized, sponsor-ready platforms that enable scalable, long-term corporate investment while preserving local identity and hockey governance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Main Property */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JTJ1GMJDCZ" />
        <Script id="google-analytics-main">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JTJ1GMJDCZ');`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5ZR653T8');`}
        </Script>
        {/* Google Analytics - Secondary Property */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5JG2WE35WF" />
        <Script id="google-analytics-secondary">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5JG2WE35WF');`}
        </Script>
        {/* Google Analytics - Third Property */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-W6SK4TZ4C9" />
        <Script id="google-analytics-tertiary">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W6SK4TZ4C9');`}
        </Script>
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZR653T8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
