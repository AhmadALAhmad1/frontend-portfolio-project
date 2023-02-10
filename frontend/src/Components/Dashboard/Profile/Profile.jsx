import React from "react";
import './Profile.css'
import profilePicture from '../../../images/cat.jpg'
import mobileMenuIcon from  '../../../images/mobileMenu.png'

export default function Profile(){
    return(
        <>
            <div id='infoSectionProfile' className="infoSectionProfile">
                <div className="input">
                    <label for='firstName'> First Name</label><input  type="text" placeholder=""  id="firstName" className="asideElement" Profile/>
                </div>
                <div className="input">
                    <label for='lastName' >Last Name </label><input  type="text" placeholder="" id="lastName" className="asideElement"Statistics/>       
                </div>
                <div className="input">
                    <label for='headLine'>Head-line</label><input  type="text" placeholder="" id="headLine" className="asideElement"Mail box/>      
                </div>
                <div className="input">
                    <label for='newPass'>New Password</label><input  type="text" placeholder="" id="newPass" className="asideElement"About Me/>       
                </div>
                <div className="input">
                    <label for='confirmPass'>Confirm Password</label><input  type="text" placeholder="" id="confirmPass" className="asideElement"Skill/>
                </div>
                <button className="save">SAVE</button>
            </div>
            <div id='pictureSectionProfile' className="pictureSectionProfile">
                <div className="imgSection">
                    <img src={profilePicture} alt="" />
                    <p className="pinkLine">LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL</p>
                </div>
                <button className="upload">Upload</button> 
            </div>
        </>
    )}