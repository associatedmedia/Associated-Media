import { services } from "@/lib/constant";

export default function ServiceLayout({ params }) {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <h1>Service not found</h1>;
  }

  let content;

  if (slug === "video_motion_graphics") {
    content = (
      <>
        <section>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_text_writting">
                 {service.title}
                </h2>
              </div>
            </div>

            <div className="cs_height_100 cs_height_lg_60"></div>

            <div className="cs_service_details">
              <div className="cs_service_details_img">
                <div className="cs_style_img">
                  <img src="/assets/img/service_details_banner.png"     alt="service_details_banner"/>
                </div>
              </div>

              <div className="cs_service_details_text">
                <div className="cs_service_details_p">
                  <p className="anim_text">
                    Welcome to our digital agency! We specialize in helping
                    businesses like yours succeed online. From website design
                    and development to digital marketing and advertising, we
                    have the tools and expertise to elevate your online
                    presence. Let us help you lione evolving world of digital.
                  </p>

                  <ul className="anim_div_ShowDowns">
                    <li>Design Welcome to our digital agency!</li>
                    <li>Dev online. From website design</li>
                    <li>Implementation evolving world of digital to drive</li>
                    <li>Launch growth and reach your goals.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs_height_150 cs_height_lg_60"></div>

        <div className="container">
          <div className="d-flex gap-2 gap-md-5">
            <div>
              <img src="/assets/img/service_slider_1.png" alt="" />
            </div>
            <div>
              <img src="/assets/img/service_slider_2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="cs_height_150 cs_height_lg_50"></div>
      </>
    );
  }

     else if (slug === "branding_strategy") {
    content = (
      <>
        <section>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_text_writting">
                  {service.title}
                </h2>
              </div>
            </div>

            <div className="cs_height_100 cs_height_lg_60"></div>

            <div className="cs_service_details">
              <div className="cs_service_details_img">
                <div className="cs_style_img">
                  <img src="/assets/img/service_details_banner.png"     alt="service_details_banner"
                  />
                </div>
              </div>

              <div className="cs_service_details_text">
                <div className="cs_service_details_p">
                  <p className="anim_text">
                    Welcome to our digital agency! We specialize in helping
                    businesses like yours succeed online. From website design
                    and development to digital marketing and advertising, we
                    have the tools and expertise to elevate your online
                    presence. Let us help you lione evolving world of digital.
                  </p>

                  <ul className="anim_div_ShowDowns">
                    <li>Design Welcome to our digital agency!</li>
                    <li>Dev online. From website design</li>
                    <li>Implementation evolving world of digital to drive</li>
                    <li>Launch growth and reach your goals.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs_height_150 cs_height_lg_60"></div>

        <div className="container">
          <div className="d-flex gap-2 gap-md-5">
            <div>
              <img src="/assets/img/service_slider_1.png" alt="" />
            </div>
            <div>
              <img src="/assets/img/service_slider_2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="cs_height_150 cs_height_lg_50"></div>
      </>
    );
  } else if (slug === "advertising") {
    content = (
      <>
        <section>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_text_writting">
                  {service.title}
                </h2>
              </div>
            </div>

            <div className="cs_height_100 cs_height_lg_60"></div>

            <div className="cs_service_details">
              <div className="cs_service_details_img">
                <div className="cs_style_img">
                  <img src="/assets/img/service_details_banner.png"     alt="service_details_banner"
                  />
                </div>
              </div>

              <div className="cs_service_details_text">
                <div className="cs_service_details_p">
                  <p className="anim_text">
                    Welcome to our digital agency! We specialize in helping
                    businesses like yours succeed online. From website design
                    and development to digital marketing and advertising, we
                    have the tools and expertise to elevate your online
                    presence. Let us help you lione evolving world of digital.
                  </p>

                  <ul className="anim_div_ShowDowns">
                    <li>Design Welcome to our digital agency!</li>
                    <li>Dev online. From website design</li>
                    <li>Implementation evolving world of digital to drive</li>
                    <li>Launch growth and reach your goals.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs_height_150 cs_height_lg_60"></div>

        <div className="container">
          <div className="d-flex gap-2 gap-md-5">
            <div>
              <img src="/assets/img/service_slider_1.png" alt="" />
            </div>
            <div>
              <img src="/assets/img/service_slider_2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="cs_height_150 cs_height_lg_50"></div>
      </>
    );
  } 
  else if (slug === "Web_development") {
    content = (
      <>
        <section>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_text_writting">
                  {service.title}
                </h2>
              </div>
            </div>

            <div className="cs_height_100 cs_height_lg_60"></div>

            <div className="cs_service_details">
              <div className="cs_service_details_img">
                <div className="cs_style_img">
                  <img src="/assets/img/service_details_banner.png"     alt="service_details_banner"
                  />
                </div>
              </div>

              <div className="cs_service_details_text">
                <div className="cs_service_details_p">
                  <p className="anim_text">
                    Welcome to our digital agency! We specialize in helping
                    businesses like yours succeed online. From website design
                    and development to digital marketing and advertising, we
                    have the tools and expertise to elevate your online
                    presence. Let us help you lione evolving world of digital.
                  </p>

                  <ul className="anim_div_ShowDowns">
                    <li>Design Welcome to our digital agency!</li>
                    <li>Dev online. From website design</li>
                    <li>Implementation evolving world of digital to drive</li>
                    <li>Launch growth and reach your goals.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs_height_150 cs_height_lg_60"></div>

        <div className="container">
          <div className="d-flex gap-2 gap-md-5">
            <div>
              <img src="/assets/img/service_slider_1.png" alt="" />
            </div>
            <div>
              <img src="/assets/img/service_slider_2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="cs_height_150 cs_height_lg_50"></div>
      </>
    );
  } 
  else if (slug === "digital_marketing") {
    content = (
      <>
        <section>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_text_writting">
                  {service.title}
                </h2>
              </div>
            </div>

            <div className="cs_height_100 cs_height_lg_60"></div>

            <div className="cs_service_details">
              <div className="cs_service_details_img">
                <div className="cs_style_img">
                  <img src="/assets/img/service_details_banner.png"     alt="service_details_banner"
                  />
                </div>
              </div>

              <div className="cs_service_details_text">
                <div className="cs_service_details_p">
                  <p className="anim_text">
                    Welcome to our digital agency! We specialize in helping
                    businesses like yours succeed online. From website design
                    and development to digital marketing and advertising, we
                    have the tools and expertise to elevate your online
                    presence. Let us help you lione evolving world of digital.
                  </p>

                  <ul className="anim_div_ShowDowns">
                    <li>Design Welcome to our digital agency!</li>
                    <li>Dev online. From website design</li>
                    <li>Implementation evolving world of digital to drive</li>
                    <li>Launch growth and reach your goals.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs_height_150 cs_height_lg_60"></div>

        <div className="container">
          <div className="d-flex gap-2 gap-md-5">
            <div>
              <img src="/assets/img/service_slider_1.png" alt="" />
            </div>
            <div>
              <img src="/assets/img/service_slider_2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="cs_height_150 cs_height_lg_50"></div>
      </>
    );
  } 
  else if (slug === "printing") {
    content = (
      <>
        <section>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_text_writting">
                  {service.title}
                </h2>
              </div>
            </div>

            <div className="cs_height_100 cs_height_lg_60"></div>

            <div className="cs_service_details">
              <div className="cs_service_details_img">
                <div className="cs_style_img">
                  <img src="/assets/img/service_details_banner.png"     alt="service_details_banner"
                  />
                </div>
              </div>

              <div className="cs_service_details_text">
                <div className="cs_service_details_p">
                  <p className="anim_text">
                    Welcome to our digital agency! We specialize in helping
                    businesses like yours succeed online. From website design
                    and development to digital marketing and advertising, we
                    have the tools and expertise to elevate your online
                    presence. Let us help you lione evolving world of digital.
                  </p>

                  <ul className="anim_div_ShowDowns">
                    <li>Design Welcome to our digital agency!</li>
                    <li>Dev online. From website design</li>
                    <li>Implementation evolving world of digital to drive</li>
                    <li>Launch growth and reach your goals.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs_height_150 cs_height_lg_60"></div>

        <div className="container">
          <div className="d-flex gap-2 gap-md-5">
            <div>
              <img src="/assets/img/service_slider_1.png" alt="" />
            </div>
            <div>
              <img src="/assets/img/service_slider_2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="cs_height_150 cs_height_lg_50"></div>
      </>
    );
  } 
  else if (slug === "line_production") {
    content = (
      <>
        <section>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_text_writting">
                  {service.title}
                </h2>
              </div>
            </div>

            <div className="cs_height_100 cs_height_lg_60"></div>

            <div className="cs_service_details">
              <div className="cs_service_details_img">
                <div className="cs_style_img">
                  <img src="/assets/img/service_details_banner.png"     alt="service_details_banner"
                  />
                </div>
              </div>

              <div className="cs_service_details_text">
                <div className="cs_service_details_p">
                  <p className="anim_text">
                    Welcome to our digital agency! We specialize in helping
                    businesses like yours succeed online. From website design
                    and development to digital marketing and advertising, we
                    have the tools and expertise to elevate your online
                    presence. Let us help you lione evolving world of digital.
                  </p>

                  <ul className="anim_div_ShowDowns">
                    <li>Design Welcome to our digital agency!</li>
                    <li>Dev online. From website design</li>
                    <li>Implementation evolving world of digital to drive</li>
                    <li>Launch growth and reach your goals.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs_height_150 cs_height_lg_60"></div>

        <div className="container">
          <div className="d-flex gap-2 gap-md-5">
            <div>
              <img src="/assets/img/service_slider_1.png" alt="" />
            </div>
            <div>
              <img src="/assets/img/service_slider_2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="cs_height_150 cs_height_lg_50"></div>
      </>
    );
  } 
  else if (slug === "equipment_rentals") {
    content = (
      <>
        <section>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_text_writting">
                  {service.title}
                </h2>
              </div>
            </div>

            <div className="cs_height_100 cs_height_lg_60"></div>

            <div className="cs_service_details">
              <div className="cs_service_details_img">
                <div className="cs_style_img">
                  <img src="/assets/img/service_details_banner.png"     alt="service_details_banner"
                  />
                </div>
              </div>

              <div className="cs_service_details_text">
                <div className="cs_service_details_p">
                  <p className="anim_text">
                    Welcome to our digital agency! We specialize in helping
                    businesses like yours succeed online. From website design
                    and development to digital marketing and advertising, we
                    have the tools and expertise to elevate your online
                    presence. Let us help you lione evolving world of digital.
                  </p>

                  <ul className="anim_div_ShowDowns">
                    <li>Design Welcome to our digital agency!</li>
                    <li>Dev online. From website design</li>
                    <li>Implementation evolving world of digital to drive</li>
                    <li>Launch growth and reach your goals.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs_height_150 cs_height_lg_60"></div>

        <div className="container">
          <div className="d-flex gap-2 gap-md-5">
            <div>
              <img src="/assets/img/service_slider_1.png" alt="" />
            </div>
            <div>
              <img src="/assets/img/service_slider_2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="cs_height_150 cs_height_lg_50"></div>
      </>
    );
  } 
  else if (slug === "social_media") {
    content = (
      <>
        <section>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_text_writting">
                  {service.title}
                </h2>
              </div>
            </div>

            <div className="cs_height_100 cs_height_lg_60"></div>

            <div className="cs_service_details">
              <div className="cs_service_details_img">
                <div className="cs_style_img">
                  <img src="/assets/img/service_details_banner.png"     alt="service_details_banner"
                  />
                </div>
              </div>

              <div className="cs_service_details_text">
                <div className="cs_service_details_p">
                  <p className="anim_text">
                    Welcome to our digital agency! We specialize in helping
                    businesses like yours succeed online. From website design
                    and development to digital marketing and advertising, we
                    have the tools and expertise to elevate your online
                    presence. Let us help you lione evolving world of digital.
                  </p>

                  <ul className="anim_div_ShowDowns">
                    <li>Design Welcome to our digital agency!</li>
                    <li>Dev online. From website design</li>
                    <li>Implementation evolving world of digital to drive</li>
                    <li>Launch growth and reach your goals.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs_height_150 cs_height_lg_60"></div>

        <div className="container">
          <div className="d-flex gap-2 gap-md-5">
            <div>
              <img src="/assets/img/service_slider_1.png" alt="" />
            </div>
            <div>
              <img src="/assets/img/service_slider_2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="cs_height_150 cs_height_lg_50"></div>
      </>
    );
  } 
  else {
    content = (
      <div>
        <h1>Hello {service.title}</h1>
        <p>{service.desc}</p>
      </div>
    );
  }

  return <>{content}</>;
}
