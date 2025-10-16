import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: "I had the pleasure to work with Associated media two times in Kashmir, producing a documentary format series for TV2 Norway, and later for Travel Channel USA. I highly recommend any team filming in Kashmir to work with this highly professional, skilled and very pleasant team.",
      name: "Gry Winther",
      designation: "Creator/Executive Producer/Director",
      avatar: "/assets/img/gry.jpg",
    },
    {
      text: "There is one excellent film production company in Kashmir, this is it! I had the great pleasure to work with these professionals, shooting a documentary series for Travel Channel. Equipment, Crew, Stocks, you name it they got it. Highly appreciated and warmly recommended.",
      name: "Meidell Olsen",
      designation: "Director Of Photography (Travel Channel).",
      avatar: "/assets/img/meidell.jpg",
    },
    {
      text: "We have worked with Associated Media on an international film. Excellent production company with latest equipment and experienced crew.",
      name: "Jason Motlagh",
      designation: "Writer, Broadcast Journalist, Filmmaker, rolling stone, time magazine's, national geographic, the washington post, the guardian and the economist, al-jazeera english, national geographic, cgtn america, sbs dateline and vice world news.",
      avatar: "/assets/img/motlagh.jpg",
    },
    {
      text: "Their familarity with the local context, skilled cameraman and technicians, and high end facilities were additional assets and we value our experience with them highly.",
      name: "Vaishali Sinha",
      designation: "Director/Producer, 'My Kashmir'.",
      avatar: "/assets/img/vaishali.jpg",
    },
    {
      text: "Associated Kashmir was a fantastic partner in the production of Valley of Saints in Kashmir, Their team helped us at every stage from script to scene.",
      name: "Nicholas Bruckman",
      designation: "Producer /Founder Peoples  TV Network.",
      avatar: "/assets/img/nicholas.jpg",
    },
     {
      text: "Associated Media was a key partner for our production in Kashmir. Tariq, Wajahat, & their whole team were professional, trustworthy, efficient, & supportive. They were able to provide everything we needed:locations, onscreen talent, permissions, equipment, archival footage, and even original motion graphics. If you are shooting in Kashmir, they should be the first ones you contact.",
      name: "Musa Syeed",
      designation: "Director, Valley Of Saints,  New York, USA",
      avatar: "/assets/img/musa.jpg",
    },
    {
      text: "We have worked with them multiple times in different capacities – for filming, camera, archival footage – and found their work of a high professional standard and quality “.",
      name: "Maduri Mohindar",
      designation: "Communications Consultant & Multimedia producer Breakthrough",
      avatar: "/assets/img/madhuri.jpg",
    },
    
  ];

  return (
    <>
      <section className="cs_primary_bg cs_shape_wrap_2">
        {/* Decorative shapes */}
        <div className="cs_shape_1">
          <svg
            width="1041"
            height="1005"
            viewBox="0 0 1041 1005"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.3"
              cx="538.5"
              cy="502.5"
              r="501.5"
              stroke="#454545"
              strokeWidth="2"
            />
            <circle
              opacity="0.3"
              cx="501.5"
              cy="526.5"
              r="458.5"
              stroke="#454545"
              strokeWidth="2"
            />
            <circle
              opacity="0.3"
              cx="453"
              cy="570"
              r="424"
              stroke="#454545"
              strokeWidth="2"
            />
            <circle
              opacity="0.3"
              cx="396"
              cy="591"
              r="377"
              stroke="#454545"
              strokeWidth="2"
            />
            <circle
              opacity="0.3"
              cx="330"
              cy="630"
              r="329"
              stroke="#454545"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="cs_shape_2">
          <svg
            width="149"
            height="149"
            viewBox="0 0 149 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.23">
              <path
                d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z"
                fill="#454545"
              />
              <path
                d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z"
                fill="#454545"
              />
            </g>
          </svg>
        </div>

        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="row align-items-center">
            {/* Left side thumbnail */}
            <div className="col-lg-4">
              <Image
                src="/assets/img/testimonial_thumb_1.jpg"
                alt="Testimonials"
                className="w-100"
                width={620}
                height={798}
              />
            </div>

            {/* Right side slider */}
            <div className="col-lg-7 offset-lg-1">
              <div className="cs_testimonial cs_style_1 cs_color_1">
                <h2 className="cs_testimonial_title">
                  Some Of Our Respected Happy Clients Say
                </h2>
                <div className="cs_slider cs_slider_4">
                  <div className="swiper-wrapper">
                    {testimonials.map((t, index) => (
                      <div className="swiper-slide" key={index}>
                        <div className="cs_testimonial_box">
                          <div className="cs_testimonial_quote_icon">
                            <svg
                              width="61"
                              height="44"
                              viewBox="0 0 61 44"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 26.2855H12.9844L4.32807 43.4283H17.3125L25.9689 26.2855V0.571289H0V26.2855Z"
                                fill="#bb1800"
                              />
                              <path
                                d="M34.625 0.571289V26.2855H47.6094L38.9531 43.4283H51.9375L60.5939 26.2855V0.571289H34.625Z"
                                fill="#bb1800"
                              />
                            </svg>
                          </div>
                          <blockquote className="cs_testimonial_text">
                            “{t.text}”
                          </blockquote>
                          <div className="cs_testimonial_meta">
                            <div className="cs_testimonial_avatar">
                              <Image
                                src={t.avatar}
                                alt={t.name}
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="cs_testimonial_meta_right">
                              <h3 className="cs_testimonial_avatar_name">
                                {t.name}
                              </h3>
                              <div className="cs_testimonial_avatar_designation">
                                {t.designation}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Pagination */}
                  <div className="cs_pagination cs_style1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cs_height_150 cs_height_lg_60"></div>
      </section>
      <div className="cs_height_115 cs_height_lg_60"></div>
    </>
  );
}
