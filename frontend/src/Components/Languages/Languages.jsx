import React from "react";
import "./Languages.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import LanguagesImg from "./LanguagesImg";
export const Languages = () => {

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
       setInfo(response.data);
     })
     .catch((error) => console.error(`Error : {${error}`));
 const languagesImg = info.map((object) => {
   if (object.section === "Skills") {
     return (
       <LanguagesImg key={object.id} image={object.image}/>
     );
   } else {
     return null;
   }
 });

  return (
    <>
      <div class="background" id="Languages">
        <h1 class="skillsTitle">Skills</h1>
        <div class="skillsLine"></div>
        <div class="languages">
          <p class="language">
            {languagesImg}
          </p>
          <p class="language">
          {languagesImg}
          </p>
          <p class="language">
          {languagesImg}
          </p>
          <p class="language">
          {languagesImg}
          </p>
          <p class="language">
          {languagesImg}
          </p>
          <p class="language">
          {languagesImg}
          </p>
        </div>
        <div class="lines2">
          <div class="line1"></div>
          <div class="line2"></div>
        </div>
      </div>
    </>
  );
};
