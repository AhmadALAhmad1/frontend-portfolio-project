import React from "react";
import "../MyWork.css";

export default function ProjectCard(props) 
{
  return (
    <div class="fullCard">
      <article class="card">
        <img src={props.img} alt="a" className="cardImg"/>
      </article>
      <h3 class="projectName">{props.name}</h3>
    </div>
  );
}
