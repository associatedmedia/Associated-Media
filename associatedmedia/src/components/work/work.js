
import Image from "next/image";
export default function Work()
{
    return(
        <>
        <div className="cs_horizontal_scroll_wrap">
            <div className="cs_height_145 cs_height_lg_60"></div>
            <div className="container">
                <div className="cs_section_heading cs_style_1 cs_type_2">
                    <div className="cs_section_heading_text">
                        <div className="cs_section_subtitle anim_div_ShowZoom">
                            Portfolio
                        </div>
                        <h2 className="cs_section_title anim_heading_title">
                            Some Recent Project We Successfully Done
                        </h2>
                    </div>
                </div>
                <div className="cs_height_100 cs_height_lg_60"></div>
            </div>
            <div className="cs_horizontal_scrolls anim_div_ShowDowns">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="cs_horizontal_scroll">
                            <a href="portfolio-details.html" className="cs_portfolio cs_style_1">
                                <div className="cs_portfolio_img">
                                    <Image src="/assets/img/portfolio_1.png" alt="Thumb" width={420} height={560} />
                                </div>
                                <div className="cs_portfolio_overlay"></div>
                                <div className="cs_portfolio_info">
                                    <h2 className="cs_portfolio_title">
                                        Project Task Management
                                    </h2>
                                    <div className="cs_portfolio_subtitle">
                                        Digital Services / App Design
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="cs_horizontal_scroll">
                            <a href="portfolio-details.html" className="cs_portfolio cs_style_1">
                                <div className="cs_portfolio_img">
                                    <Image src="/assets/img/portfolio_2.png" alt="Thumb" width={420} height={560}/>
                                </div>
                                <div className="cs_portfolio_overlay"></div>
                                <div className="cs_portfolio_info">
                                    <h2 className="cs_portfolio_title">
                                        Project Task Management
                                    </h2>
                                    <div className="cs_portfolio_subtitle">
                                        Digital Services / App Design
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="cs_horizontal_scroll">
                            <a href="portfolio-details.html" className="cs_portfolio cs_style_1">
                                <div className="cs_portfolio_img">
                                    <Image src="/assets/img/portfolio_3.png" alt="Thumb" width={420} height={560}/>
                                </div>
                                <div className="cs_portfolio_overlay"></div>
                                <div className="cs_portfolio_info">
                                    <h2 className="cs_portfolio_title">
                                        Project Task Management
                                    </h2>
                                    <div className="cs_portfolio_subtitle">
                                        Digital Services / App Design
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="cs_horizontal_scroll">
                            <a href="" className="cs_portfolio cs_style_1">
                                <div className="cs_portfolio_img">
                                    <Image src="/assets/img/portfolio_2.png" alt="Thumb" width={420} height={560}/>
                                </div>
                                <div className="cs_portfolio_overlay"></div>
                                <div className="cs_portfolio_info">
                                    <h2 className="cs_portfolio_title">
                                        Project Task Management
                                    </h2>
                                    <div className="cs_portfolio_subtitle">
                                        Digital Services / App Design
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="cs_horizontal_scroll">
                            <a href="" className="cs_portfolio cs_style_1">
                                <div className="cs_portfolio_img">
                                    <Image src="/assets/img/portfolio_1.png" alt="Thumb" width={420} height={560} />
                                </div>
                                <div className="cs_portfolio_overlay"></div>
                                <div className="cs_portfolio_info">
                                    <h2 className="cs_portfolio_title">
                                        Project Task Management
                                    </h2>
                                    <div className="cs_portfolio_subtitle">
                                        Digital Services / App Design
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="cs_horizontal_scroll">
                            <a href="portfolio-details.html" className="cs_portfolio cs_style_1">
                                <div className="cs_portfolio_img">
                                    <Image src="/assets/img/portfolio_2.png" alt="Thumb" width={420} height={560}/>
                                </div>
                                <div className="cs_portfolio_overlay"></div>
                                <div className="cs_portfolio_info">
                                    <h2 className="cs_portfolio_title">
                                        Project Task Management
                                    </h2>
                                    <div className="cs_portfolio_subtitle">
                                        Digital Services / App Design
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="cs_height_145 cs_height_lg_60"></div>
        </>
    )
}