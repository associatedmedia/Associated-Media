export default function midsec()
{
    return(
        <>
        
        {/* two sections modified */}
<section className="brands-section py-5">
    <div className="container">
      <div className="row align-items-center rounded-4 p-5 bg-darkblue">
        
        
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="row g-3">
            <div className="col-6"><div className="brand-card">Logoipsum</div></div>
            <div className="col-6"><div className="brand-card">Logoipsum</div></div>
            <div className="col-6"><div className="brand-card">Logoipsum</div></div>
            <div className="col-6"><div className="brand-card">Logoipsum</div></div>
            <div className="col-6"><div className="brand-card">Logoipsum</div></div>
            <div className="col-6"><div className="brand-card">Logoipsum</div></div>
          </div>
        </div>

        
        <div className="col-lg-6 ps-lg-5">
          <h2 className="fw-bold">Brands We Proudly Support</h2>
          <p className="text-light-emphasis">
            We partner with visionary brands, providing innovative media solutions that drive growth, 
            enhance brand presence, and create lasting impact effectively.
          </p>
          <a href="#" className="btn btn-primary mt-2">View All</a>
        </div>
      </div>
    </div>
  </section>

  
  <section className="video-section py-5">
    <div className="container">
      <div className="row align-items-center rounded-4 p-5 bg-darkblue">
        
        
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img src="https://images.unsplash.com/photo-1590608897129-79da98d1596e"  alt="Video Production"  className="img-fluid rounded-4 shadow"/>
        </div>

        
        <div className="col-lg-6 ps-lg-5">
          <h3 className="fw-bold">
            Captivating Visuals: Elevate Your Brand with Expert Video Production
          </h3>
          <p className="text-light-emphasis">
            Associated Media’s video production service delivers compelling visuals, 
            blending creativity with technical expertise to captivate audiences and 
            elevate your brand’s storytelling effectively and efficiently.
          </p>

          <div className="d-flex gap-4 my-3">
            <div><h4 className="fw-bold">150+</h4><p className="m-0">Happy Clients</p></div>
            <div><h4 className="fw-bold">200%</h4><p className="m-0">Growth Increase</p></div>
            <div><h4 className="fw-bold">10+</h4><p className="m-0">Years Experience</p></div>
          </div>

          <div className="d-flex gap-3">
            <a href="#" className="btn btn-primary">View More</a>
            <a href="#" className="btn btn-outline-primary">Learn More</a>
          </div>
        </div>

      </div>
    </div>
  </section>

{/* sections completed*/}</>
    )
}