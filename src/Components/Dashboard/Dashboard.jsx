import React from "react";
import profileIcon from '../../images/profileIcon.ico'
import style from './Dashboard.css'
import profilePicture from '../../images/cat.jpg'
import mobileMenuIcon from  '../../images/mobileMenu.png'

function Dashboard(){
    return(
        <div>
            <nav  className="DashNav">
              <h1>Dashboard</h1>
            <div className="navLeft">
                <img src={profileIcon} alt="" />
                <button className="logOut">Log out</button>
            </div>
            </nav>
            <div className="DashBody">
                <div className="aside">
                    <a href="#" id='profile' className="asideElement" >Profile</a>
                    <a href="#" id="header" className="asideElement">Header</a>
                    <a href="#" id="contactInfo" className="asideElement">Contact Info</a>
                    <a href="#" id="about" className="asideElement">About</a>
                    <a href="#" id='skills' className="asideElement">Skills</a>
                    <a href="#" id='myWork' className="asideElement">My Work</a>
                    <a href="#" id='socialMediaLinks' className="asideElement">Social Media Links</a>
                </div>
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

            </div>

        </div>
    )
}
export default Dashboard;
