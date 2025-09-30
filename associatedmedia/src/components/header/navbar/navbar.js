import Logo from "../logo/logo";
import Navlist from "./navlist/navlist";
import Mobilemenu from "./mobilemenu/mobilemenu";
import Image from "next/image";
import Link from "next/link";
export default function navbar() {
    return (
      <>
      <header className="cs_site_header cs_style1 cs_sticky_header cs_site_header_full_width">
        <div className="cs_main_header">
            <div className="container">
                <div className="cs_main_header_in">
                    <div className="cs_main_header_left">
                        <Logo/>
                    </div>
                    <div className="cs_main_header_right">
                        <div className="cs_nav cs_medium">
                            <Navlist/>
                        </div>
                        <div className="cs_toolbox">
                            <span className="cs_icon_btn">
                                <span className="cs_icon_btn_in">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
     <Mobilemenu/>
        
                  </>
    )
}