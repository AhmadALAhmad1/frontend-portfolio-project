import React from "react";
import profileIcon from '../../../images/profileIcon.ico'
import './DashNav.css'

export default function DashNav(){
    return(
<nav  className="DashNav">
<h1>Dashboard</h1>
<div className="navLeft">
  <img src={profileIcon} alt="" />
  <button className="logOut">Log out</button>
</div>
</nav>
    )
}