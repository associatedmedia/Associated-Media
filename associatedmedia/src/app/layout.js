import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import FooterScripts from '@/components/footer/footerscripts';

export const metadata = {
  title: "Associated Media",
  description: "30 Years of Story Telling!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FooterScripts/>
      </body>
    </html>
  );
}
