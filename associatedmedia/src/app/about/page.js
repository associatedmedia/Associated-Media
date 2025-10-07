import Image from "next/image";
import Navbar from '@/components/header/navbar/navbar';
import Counter from '@/components/counter/counter';
import Testimonials from '@/components/testimonials/testimonials';
import {logos} from '@/lib/constant';
import Footer from '@/components/footer/footer';
export default function AboutPage()
{
    return(
        <>
        <Navbar/>
        <div id="scrollsmoother-container">

        <div className="cs_height_219 cs_height_lg_120"></div>

        <section>

            <div className="container">

                <div className="cs_section_heading cs_style_1 cs_type_1">

                    <div className="cs_section_heading_text">

                        <h2 className="cs_section_title anim_text_writting">

                            How Our Agency is Transforming <br /> Businesses and Brands through <br /> Online Solutions

                        </h2>

                    </div>

                     <div className="cs_section_heading_right">
      <div className="cs_animated_badge">
        <div className="rounded_text rotating">
          <svg viewBox="0 0 200 200">
            <path
              id="textPath"
              d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
              transform="translate(100,100)"
              fill="none"
              strokeWidth="0"
            />
            <g fontSize="22.1px">
              <text textAnchor="start">
                <textPath className="coloring" href="#textPath" startOffset="0%">
                  Vixan Digital Agency . Vixan Digital Agency .
                </textPath>
              </text>
            </g>
          </svg>
        </div>

        <div className="position-absolute cs_ceneter_text">
          <div className="relative w-20 h-20">
            <Image
              src="/assets/img/amlogo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>

                </div>

            </div>

        </section>



        <div className="cs_height_100 cs_height_lg_60"></div>

        <div className="container">

            <div className="cs_parallax">

                <a href="https://www.youtube.com/watch?v=VcaAVWtP48A"

                    className="cs_video_block cs_style1 cs_video_open cs_bg cs_parallax_bg"

                    data-src="assets/img/video_block.png">

                    <span className="cs_player_btn cs_accent_color">

                        <span></span>

                    </span>

                </a>

            </div>

        </div>
 <Counter/>
<div className="cs_height_150 cs_height_lg_60"></div>

        <section>

            <div className="cs_primary_bg">

                <div className="container">

                    <div className="cs_height_100 cs_height_lg_60"></div>

                    <div className="cs_section_heading_hr cs_style_1">

                        <div className="cs_hr_design"></div>

                        <div className="cs_section_heading cs_style_1 cs_color_1">

                            <div className="cs_section_heading_text">

                                <h2 className="cs_section_title anim_heading_title">

                                    Our Agency Story

                                </h2>

                            </div>

                        </div>

                        <div className="cs_hr_design"></div>

                    </div>

                    <div className="cs_height_100 cs_height_lg_60"></div>

                    <div>

                        <div className="row">

                            <div className="col-md-6 col-sm-12">

                                <div className="cs_section_heading cs_style_1 cs_color_1">

                                    <div className="cs_section_heading_text">

                                        <h3 className="cs_section_title_3 anim_div_ShowLeftSide">

                                            How Our Agency is Pushing the Boundaries of Online Marketing and Design

                                        </h3>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-6 col-sm-12">

                                <div className="anim_div_ShowRightSide">

                                    <p className="cs_ternary_color">

                                        Digital agency! We specialize in helping businesses like yours succeed online.

                                        From website design and development to digital marketing and advertising, we

                                        have the tools and expertise to elevate your online presence. Let us help you

                                        lione evolving world

                                        of digital to drive growth and reach your goals.

                                    </p>

                                    <p className="cs_ternary_color">

                                        Digital agency! We specialize in helping businesses like yours succeed online.

                                        From website design and development to digital marketing and advertising, we

                                        have the tools and expertise to elevate your online presence. Let us help you

                                        lione evolving world

                                        of digital to drive growth and reach your goals.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="cs_height_385 cs_height_lg_120"></div>

                </div>

            </div>

            <div className="container">

                <div className="cs_agency agency_about_images_posation">

                    <div className="cs_img_section_1">

                        <Image src="/assets/img/agency_story_1.png" alt="" className="w-100" width={363} height={409} />

                    </div>

                    <div className="cs_img_section_2">

                        <Image src="/assets/img/agency_story_2.png" alt="" className="w-100" width={527} height={624}/>

                    </div>

                    <div className="cs_img_section_3">

                        <div className="text-end">

                            <Image src="/assets/img/agency_story_4.png" alt="" width={307} height={265} />

                            <Image src="/assets/img/agency_story_3.png" className="w-100" alt="" width={370} height={251} />

                        </div>

                    </div>

                </div>

            </div>

        </section>

<Testimonials/>
 <div className="cs_height_45 cs_height_lg_45"></div>

        <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
      <div className="cs_moving_section_in">
        <div className="cs_moving_section cs_animation_speed_50">
          <div className="cs_partner_logo_wrap">
            {logos.map((logo, i) => (
              <div key={i} className="cs_partner_logo">
                <Image
                  src={`/assets/img/${logo}`}
                  alt={`Partner ${i + 1}`}
                  width={120}   // adjust as needed
                  height={60}   // adjust as needed
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        
        </div>
        <Footer/>
        </>
    )
}