"use client";
import { useState } from "react";
import Navbar from "@/components/header/navbar/navbar";
import Image from "next/image";
import Testimonials from '@/components/testimonials/testimonials';
import Link from "next/link";
import {portfolioItems} from '@/lib/constant';
import {categories} from '@/lib/constant';
export default function PortfolioPage()
{
    const [activeFilter, setActiveFilter] = useState("*");

  // ✅ Filter logic
  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.categories.includes(activeFilter));

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

                            Some Recent Project We Successfully Done

                        </h2>

                    </div>

                </div>

            </div>

        </section>

        <div className="cs_height_50 cs_height_lg_25"></div>

         <section className="cs_ui_design">
      <div className="container">
        {/* ====== FILTER MENU ====== */}
        <div className="row">
          <div className="cs_isotop_item_menu col-md-12">
            <ul className="anim_div_ShowZoom">
              {categories.map((cat) => (
                <li
                  key={cat.filter}
                  data-filter={cat.filter}
                  className={activeFilter === cat.filter ? "active" : ""}
                  onClick={() => setActiveFilter(cat.filter)}
                  style={{ cursor: "pointer" }}
                >
                  {cat.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ====== PORTFOLIO ITEMS ====== */}
        <div className="cs_isotop_items_details row">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`col-md-4 cs_item ${item.categories.join(" ")}`}
            >
              <Link href="/portfolio" className="cs_portfolio cs_style_1">
                <div className="cs_portfolio_img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="img-fluid"
                  />
                </div>
                <div className="cs_portfolio_overlay"></div>
                <div className="cs_portfolio_info">
                  <h2 className="cs_portfolio_title">{item.title}</h2>
                  <div className="cs_portfolio_subtitle">{item.subtitle}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="cs_height_70 cs_height_lg_30"></div>

        {/* ====== LOAD MORE BUTTON ====== */}
        <div className="cs_hero_btn_wrap text-center">
          <div className="cs_round_btn_wrap">
            <Link href="#" className="cs_hero_btn cs_round_btn btn-item">
              <span></span> Load More
            </Link>
          </div>
        </div>
      </div>
    </section>

       

        <section>

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
        </div>
        </>
    )
}