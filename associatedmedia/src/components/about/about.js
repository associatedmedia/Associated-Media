import {slides} from '@/lib/constant';
export default function Aboutsec() {
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <div className="cs_moving_section_wrap cs_bold">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_stroke_text">
            More Creativity Power With Associated Media
          </div>
          <div className="cs_moving_section cs_stroke_text">
            More Creativity Power With Associated Media
          </div>
        </div>
      </div>
      <div className="cs_height_130 cs_height_lg_60"></div>

      <section className="cs_slider cs_slider_2 anim_div_ShowRightSide">
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <div className="swiper-slide" key={slide.id}>
              <div className="cs_about cs_style_1">
                <div
                  className="cs_about_bg cs_bg"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                <div className="container">
                  <div className="cs_about_text">
                    <div className="cs_section_heading cs_style_1">
                      <div className="cs_section_heading_text">
                        <div className="cs_section_subtitle">{slide.subtitle}</div>
                        <h2 className="cs_section_title">{slide.title}</h2>
                      </div>
                    </div>
                    <div className="cs_height_40 cs_height_lg_30"></div>
                    <p className="cs_m0">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swiper controls */}
        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">
              <div className="cs_swiper_button_prev">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div className="cs_swiper_button_next">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
