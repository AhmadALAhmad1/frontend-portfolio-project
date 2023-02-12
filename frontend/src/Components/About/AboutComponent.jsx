import React from "react";
import './About.css'
export default function AboutComponent(props){
return(
    <> 
        <div className="image1">
        <img src={props.image} alt="image1" />
        </div>
        <div className="col2">
          <div className="text">
            <h1>About</h1>
            <div className="line"></div>
            <p className="description">{props.text}</p>
          </div>
        </div>
    </>
   
)
}
//  <div className="image1">
        //   <img src={props.image} alt="image1" />
        // </div>
