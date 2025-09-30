import { Inter_Tight, Kanit } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import FooterScripts from '@/components/footer/footerscripts';
import Swiper from 'swiper';
import 'swiper/css';
import "swiper/css/navigation"; // optional modules
import "swiper/css/pagination";
import Link from 'next/link';

// import modules you want
import { Navigation, Pagination } from "swiper/modules";


const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Associated Media",
  description: "30 Years of Story Telling!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark ${interTight.className} ${kanit.className}`}>
        {children}
        <FooterScripts/>
      </body>
    </html>
  );
}
