import React from "react";
import "./Footer.css";
import github from "../../assets/github.png"
import twitter from "../../assets/twitter.png"
import facebook from "../../assets/facebook.png"

export default function Footer(){
    return(
        <div className="footer">
                <div class="footerElements">
                    <a href="#" class="section1Ancer"><img class="section1AncerImg" src={github} alt="a" /></a>
                    <a href="#" class="section1Ancer"><img class="section1AncerImg" src={twitter} alt="a" /></a>
                    <a href="#" class="section1Ancer"><img class="section1AncerImg" src={facebook} alt="a" /></a>
                </div>
        </div>
    );
    }
