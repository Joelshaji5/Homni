import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Homnident",
  description: "In search of a dentist near you? Look no further! Homnident brings to you the best dental care right at your doorstep through our expert dentists and advance equipments. From root canal to implants, get all dental treatments at your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PRHGG2Q7');
            `,
          }}
        />
      </Head>

      <body className={inter.className}>

      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PRHGG2Q7"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        
        {children}</body>
    </html>
  );
}
