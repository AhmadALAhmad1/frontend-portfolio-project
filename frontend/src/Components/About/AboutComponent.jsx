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
            <h2>About</h2>
            <div className="line"></div>
            <p>{props.text}</p>
          </div>
        </div>
        </>
   
)
}
//  <div className="image1">
        //   <img src={props.image} alt="image1" />
        // </div>
