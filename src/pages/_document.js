import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
     <Head>
        <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Readex+Pro:wght@160..700&family=Wix+Madefor+Text:ital,wght@0,400..800;1,400..800&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
           <title>Carys Wedding - Wedding Management Services in TamilNadu</title>  
           <meta name="description" content="Carys Wedding: Expert wedding planning, stunning decorations, and seamless coordination for your dream day. Personalized services that make it stress-free—book your consultation today!" />
           <meta property="og:title" content="Wedding Planning | Carys Wedding" />
           <meta property="og:description" content="Expert planning for unforgettable weddings." />{/* Absolute URL in prod */}
           <meta property="og:image" content="/images/wedding-hero.jpg" />
           <link rel="canonical" href="https://caryswedding.com/" />
           <meta name="google-site-verification" content="EtouSeC1htWoWAUgdjeHyc-Xn3UllqHUcBhnlh2zNZc" />
        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `,
        }}></script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Carys Wedding",
  "description": "Professional wedding planning and coordination services",
  "url": "https://caryswedding.com",
  "telephone": "+91 81226 97732", 
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Villupuram",
    "addressRegion": "Tamil Nadu",
    "postalCode": "605602",
    "streetAddress": "No 64 Chidhambaranar Street, Lakshmi Nagar, Villupuram, 605602"
  },
}) }} ></script>

      </body>
    </Html>
  );
}
