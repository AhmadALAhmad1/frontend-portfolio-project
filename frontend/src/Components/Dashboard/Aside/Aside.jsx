import React from "react";
import './Aside.css'

export default function Aside(){
    return(
        <>
                <div className="aside">
                    <a href="#" id='profile' className="asideElement" >Profile</a>
                    <a href="#" id="header" className="asideElement">Header</a>
                    <a href="#" id="contactInfo" className="asideElement">Contact Info</a>
                    <a href="#" id="about" className="asideElement">About</a>
                    <a href="#" id='skills' className="asideElement">Skills</a>
                    <a href="#" id='myWork' className="asideElement">My Work</a>
                    <a href="#" id='socialMediaLinks' className="asideElement">Social Media Links</a>
                </div>
        </>
    )}