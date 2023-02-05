import React from "react";
import "./Contact.css";
//  import img1 from './images/facebook.png';
//  import img1 from './images/GitHub-Mark.png';
//  import img1 from './images/twiteer.png';
// import FacebookIcon from "@mui/icons-material/Facebook";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import {faYoutube , faGithub , faTwitter} from "@fotawesome/free-brands-svg-icons"
export const Contact = () => {
  return (
    <div className="contact">
      <div class="contactMe">Contact me</div>
      <div>
        <input
          style={{ height: "30px", width: "300px" }}
          type="text"
          placeholder="Name"
        />
      </div>
      <div>
        <input
          style={{ height: "30px", width: "300px", margin: "15px" }}
          type="text"
          placeholder="Enter email"
        />
      </div>
      <div>
        <textarea id="w3review" name="w3review" rows="16" cols="36">
          Your Message
        </textarea>
      </div>
      <div>
        <button class="buttom">Submit</button>
      </div>
<div className="img">
<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>

</div>


      {/* <div class= "container">
        
         <img src={img1} className="img1" alt="facebook.png"  />
        <img src={img1} className="img2" alt="twiteer.png" />
        <img src={img1} className="img3"  alt="GitHub-Mark.png" /> 
      </div> */}
    </div>
  );
};
export default Contact;
