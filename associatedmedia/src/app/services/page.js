import Navbar from '@/components/header/navbar/navbar';
import Services from '@/components/services/services';
import Testimonials from '@/components/testimonials/testimonials';
import {steps} from '@/lib/constant';
import Footer from '@/components/footer/footer';
import Link from 'next/link';

export default function ServicesPage()
{
    return(
        <>
        <Navbar/>
        <Services/>
        <div className="cs_height_115 cs_height_lg_60"></div>
    <section>
      <div className="cs_primary_bg">
        <div className="cs_height_135 cs_height_lg_70"></div>

        <div className="container">
          {/* Section Heading */}
          <div className="cs_section_heading_hr cs_style_1 cs_color_1">
            <div className="cs_hr_design"></div>
            <div className="cs_section_heading cs_style_1 cs_color_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_heading_title">
                  Our Working Process
                </h2>
              </div>
            </div>
            <div className="cs_hr_design"></div>
          </div>

          <div className="cs_height_100 cs_height_lg_70"></div>
          <div className="anim_div_ShowLeftSide">
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1 cs_color_1">
                {steps.map((step, index) => (
                  <div className="cs_card" key={index}>
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{step.number}</span>
                      </div>
                    </div>

                    <h6 className="cs_work_title">{step.title}</h6>
                    <p className="cs_work_subtitle">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cs_height_150 cs_height_lg_60"></div>
      </div>
    </section>
 <section>
        <Testimonials/>
            <div className="container">

                <div className="cs_learning_project">

                    <div className="cs_section_heading cs_style_1">

                        <div className="cs_section_heading_text">

                            <h3 className="cs_section_title_3 anim_heading_title">

                                We'd be interested in learning more about your project.

                            </h3>

                        </div>

                        <div className="cs_section_heading_right cs_btn_anim">

                            <Link href="/contact" className="cs_btn cs_style_1">

                                <span>Contact US</span>

                                <svg width="19" height="13" viewBox="0 0 19 13" fill="none"

                                    xmlns="http://www.w3.org/2000/svg">

                                    <path

                                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"

                                        fill="currentColor" />

                                </svg>

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </section>
        <Footer/>
        </>
    )
}