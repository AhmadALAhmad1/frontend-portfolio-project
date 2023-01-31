import React from 'react';
import "./Header.css";
import pp from "./pp.png"
export const Header = () =>{
return <div class="header">
    <div class="backGround">
        <img src={pp} alt="img" class="headerImg"/>
        <div class="headerMainContent">
            <div class="hello">
                <h1>Hi,I'm BADIH!</h1>
                <h1 class="adminField">A &nbsp;<h4 class="adminsFieldName">WEB DEV</h4>.</h1>
            </div>
            <p class="headerContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque delectus deleniti, consequuntur et provident fugit! Dolores, eligendi? Iure voluptates, obcaecati in similique molestiae voluptatem ipsa, id reiciendis tempora commodi quis.</p>
            <button class="aboutMeBtn">MORE ABOUT ME</button>
            <div class="skills"><p>Bootstrap</p><p>/&nbsp; </p><p>Javascript</p><p>/ &nbsp;</p><p>React</p></div>
            
        </div>
       
        <div class="container">
            <a href="#" class="slide-button">
            <img src={pp} alt="" />
            <span class="slide-button-info">Home</span>
            </a>
            <a href="#" class="slide-button">
            <img src={pp} alt="" />
            <span class="slide-button-info">About me</span>
            </a>
            <a href="#" class="slide-button">
            <img src={pp} alt="" />
            <span class="slide-button-info">Projects</span>
            </a>
            <a href="#" class="slide-button">
            <img src={pp} alt="" />
            <span class="slide-button-info">Contact us</span>
            </a>
        </div>

            {/* <button class="navBtn">About me</button>
            <button class="navBtn">Projects</button>
            <button class="navBtn">Contact us</button>
        </div> */}
    </div>
</div>
}
