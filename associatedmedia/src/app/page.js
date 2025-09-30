import Navbar from '@/components/header/navbar/navbar';
import Herosection from '@/components/herosection/herosection';
import Work from '@/components/work/work';
import Midsec from '@/components/midsection/midsection';
import Aboutsec from '@/components/about/about';
import Services from '@/components/services/services';
import Testimonials from '@/components/testimonials/testimonials';
import Counter from '@/components/counter/counter';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="scrollsmoother-container">
        <Herosection />
        <Aboutsec/>
        <Services/>
        <Work/>
        <Testimonials/>
        <Counter/>
        <Footer/>
      </div>
    </>
  );
}