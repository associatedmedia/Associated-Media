import Script from 'next/script';

export default function FooterScripts() {
  return (
    <>
      {/* jQuery */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" 
        strategy="afterInteractive" />

      {/* Isotope */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js" 
        strategy="afterInteractive"  />
      {/* Swiper */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js" 
        strategy="afterInteractive"  />

      {/* LightGallery */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.8.3/lightgallery.min.js" 
        strategy="afterInteractive"  />
          <Script src="/assets/js/plugins/ScrollSmoother.min.js" strategy="afterInteractive" />
       
      <Script src="/assets/js/plugins/SplitText.min.js" strategy="afterInteractive" />

      {/* GSAP Core */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js" 
        strategy="afterInteractive" />

      {/* ScrollToPlugin */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollToPlugin.min.js" 
        strategy="afterInteractive" />

      {/* ScrollTrigger */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollTrigger.min.js" 
        strategy="afterInteractive" />
     

      {/* Custom Main.js (your own script) */}
      <Script 
        src="/assets/js/main.js"  strategy="afterInteractive" />
    </>
  );
}
