import React from "react";
import "../About/About.css";
import image1 from "../../assets/image1.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import AboutComponent from "./AboutComponent";

const url = "http://localhost:5000/api/info/";

function About() {
  // get data from API
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getAllInfo();
  }, []);

  const getAllInfo = () =>
    axios
      .get(`${url}`)
      .then((response) => {
        // const AllInfo =response.data;
        //add our data to state
        setInfo(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));

  const about = info.map((object) => {
    if (object.section === "About") {
      return <AboutComponent text={object.description} image={object.image} />;
    }
    return null;
  });
  //   const numberCard = [1,2,3].map(item => {
  //     return <div>{item}</div>
  // })

  return (
    <div className="container" id="About">
      <div className="content">
        {about}
      </div>
    </div>
  );
}

export default About;
