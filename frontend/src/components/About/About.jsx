import React from "react";
import "../About/About.css";
import image1 from "../../assets/image1.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

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
        setInfo(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.error(`Error: ${error}`));

  const project = info.find((object) => {
    if (object.section === "About") {
      return true;
    }
    return false;
  });
  console.log(project);

  //   const numberCard = [1,2,3].map(item => {
  //     return <div>{item}</div>
  // })

  return (
    <div className="container">
      <div className="content">
        <div className="image1">
          <img src={project?.image} alt="image1" />
        </div>
        <div className="col2">
          <div className="text">
            <h2>About</h2>
            <div className="line"></div>
            <p>{project?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
