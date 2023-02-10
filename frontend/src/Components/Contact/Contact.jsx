import React from "react";
import "./Contact.css";

export const  Contact = () =>{
  return <div id="ContactSection">
    <div class="contact">
      <h1 class="contactTitle">Contact me</h1>
      <div class="contactLine"></div>
      <div class="contactInput">
      <input class="contactName "type="name" placeholder="Name" />
      <input class="contactEmail "type="email" placeholder="Enter Email"/>
      <textarea class="contactMessage "type="text" placeholder="Your Message" spellCheck="true"></textarea>

      </div>
    <input type="submit" class="contactSubmit" />
    </div>
    
    
  </div>
}