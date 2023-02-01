import React from 'react';
import "./Header.css";
import pp from "./pp.png"
export const Header = () =>{
    return<>
      <div class="section1Desktop">
        
        <div class="section1Ancers">
            <a href="#" class="section1Ancer"><img class="section1AncerImg" src={pp} alt="a" /></a>
            <a href="#" class="section1Ancer"><img class="section1AncerImg" src={pp} alt="a" /></a>
            <a href="#" class="section1Ancer"><img class="section1AncerImg" src={pp} alt="a" /></a>
        </div>
        <div class="border"></div>
        <div class="section1Content">
            <div class="salut">
                <h1>Hi,</h1>
                <div class="salutMyName">
                    <h1>I'm &nbsp;</h1>
                    <h1 class="salutName" >Hussein</h1>
                    <h1>,</h1>
                </div>
                <div class="domain">
                    <h1>Web Dev</h1>
                    <h1>.</h1>
                </div>
                
            </div>                
            <div class="skills"><p>Bootstrap</p><p>/&nbsp; </p><p>Javascript</p><p>/&nbsp;</p><p>React</p></div>
            <button class="contactSection1Btn">Contact Me</button>
        </div>
        <img src={pp} alt="a" class="section1Img" />
    </div>
    
    
    </>
  
}
