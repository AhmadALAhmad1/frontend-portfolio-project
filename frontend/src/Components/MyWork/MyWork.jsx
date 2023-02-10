import"./MyWork.css"

import ProjectCard from "./ProjectCard/ProjectCard";
import React, {useState} from "react";
import {useEffect} from 'react';
import axios from "axios";

export default function MyWork(){
        // get data from API
        const [info, setInfo]=useState([]);

        useEffect(() => {
            getAllInfo();
        }, []);
    
            const getAllInfo =()=>(
            axios.get('http://localhost:5000/api/info/')
            .then((response)=>{
            //add our data to state
                setInfo(response.data);
                console.log(response.data)
            })
            .catch(error => console.error(`Error : {error}`)
            ));
        const projectCards = info.map(object=>{ 
        if(object.section=="MyWork"){
            return   <ProjectCard  key={object.id} img={object.image} name={object.name} />   }
        else{ return null }
        })
return   (
<div id="Projects" className="mywork">
                        <h1 className="myWorkTitle">My Work</h1>
                        <div className="myWorkline"></div>
                        <div className="conteudo">
                            <div className="gallery">                       
                                {projectCards}
                            </div>
                        </div>
                    </div>
                        )
}



