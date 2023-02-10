import React from "react";
import"./ProjectCard.css"
export default function ProjectCard(props){
    return (
   <div class="fullCard">
        <article class="card">
               <img src={props.img} alt="a"/>
        </article>
        <h3 class="projectName">{props.name}</h3>
    </div> 
    )

    }