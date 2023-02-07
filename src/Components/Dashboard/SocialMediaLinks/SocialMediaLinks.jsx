import React from "react";
import './SocialMediaLinks.css'
import profilePicture from '../../../images/cat.jpg'
import mobileMenuIcon from  '../../../images/mobileMenu.png'

export default function SocialMediaLinks(){
    return(
        <>
            <div id='infoSectionProfile' className="infoSectionProfile">
            <div className="input">
                <label for='firstName'> First Name</label><input  type="text" placeholder=""  id="firstName" className="asideElement" />
            </div>
            <div className="input">
                <label for='lastName' >Last Name </label><input  type="text" placeholder="" id="lastName" className="asideElement"/>       
            </div>
            <div className="input">
            <label for='headLine'>Head-line</label><input  type="text" placeholder="" id="headLine" className="asideElement" />      
            </div>
            <div className="input">
            <label for='newPass'>New Password</label><input  type="text" placeholder="" id="newPass" className="asideElement"/>       
            </div>
            <div className="input">
            <label for='confirmPass'>Confirm Password</label><input  type="text" placeholder="" id="confirmPass" className="asideElement"/>
            </div>
            <button className="save">SAVE</button>
            </div>
        </>
    )}
