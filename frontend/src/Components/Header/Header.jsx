import React ,{useEffect} from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./Header.css";
import HeaderImg from './HeaderImg';

import github from "./github.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";
export default function Header() {
 // get data from API
 const [info, setInfo] = useState([]);

 useEffect(() => {
   getAllInfo();
 }, []);

 const getAllInfo = () =>
   axios
     .get("http://localhost:5000/api/info/")
     .then((response) => {
       //add our data to state
       setInfo(response.data.data);
     })
     .catch((error) => console.error(`Error : {${error}`));
 const headerImg = info.map((object) => {
   if (object.section === "Header") {
     return (
       <HeaderImg key={object.id} image={object.image}/>
     );
   } else {
     return null;
   }
 });


    return(
      <div class="headerSection">
        
        <div class="section1Ancers">
            <a href="#" class="section1Ancer"><img class="section1AncerImg" src={github} alt="a" /></a>
            <a href="#" class="section1Ancer"><img class="section1AncerImg" src={twitter} alt="a" /></a>
            <a href="#" class="section1Ancer"><img class="section1AncerImg" src={facebook} alt="a" /></a>
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
            <a class="contactSection1Btn" href="#ContactSection">Contact Me</a>
        </div>
        {headerImg}
    </div>
    
    
    )
  
}
