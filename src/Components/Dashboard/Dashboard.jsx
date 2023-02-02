import React from "react";
import profileIcon from '../../images/profileIcon.ico'
import style from './Dashboard.css'
import profilePicture from '../../images/placeholderImage.jpg'
function Dashboard(){
    return(
        <div>
            <nav  className="DashNav">
            <h1>Dashboard</h1>
            <div className="navLeft">
                <img src={profileIcon} alt="" />
                <button>Log out</button>
            </div>
            </nav>
            <div className="DashBody">
                <div className="aside">
                    <p className="asideElement">Profile</p>
                    <p className="asideElement">Statistics</p>
                    <p className="asideElement">Mail box</p>
                    <p className="asideElement">About Me</p>
                    <p className="asideElement">Skills</p>
                    <p className="asideElement">My Work</p>
                    <p className="asideElement">Social Media</p>

                </div>
                <div className="infoSection">
                        <div className="input">
                            <label for='firstName'>firstName</label><input  type="text" placeholder=""  id="firstName" className="asideElement" Profile/>
                        </div>
                        <div className="input">
                            <label for='lastName' >lastName </label><input  type="text" placeholder="" id="lastName" className="asideElement"Statistics/>       
                        </div>
                        <div className="input">
                        <label for='headLine'>headLine</label><input  type="text" placeholder="" id="headLine" className="asideElement"Mail box/>      
                        </div>
                        <div className="input">
                        <label for='newPass'>newPass</label><input  type="text" placeholder="" id="newPass" className="asideElement"About Me/>       
                        </div>
                        <div className="input">
                        <label for='confirmPass'>confirmPass</label><input  type="text" placeholder="" id="confirmPass" className="asideElement"Skill/>
                        </div>
                    <button className="save">SAVE</button>
                </div>
                <div className="profilePictureSection">
                    <img src={profilePicture} alt="" />
                    <p className="pinkLine">LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL</p>
               <button className="upload">Upload</button> 
               </div>

            </div>

        </div>
    )
}
export default Dashboard;
