// import"./MyWork.css"
// import ProjectCard from "./ProjectCard/ProjectCard";
// import React, {useState} from "react";
// import {useEffect} from 'react';
// import axios from "axios";

// export default function MyWork(){
//         // get data from API
//         const [info, setInfo]=useState([]);

//         useEffect(() => {
//             getAllInfo();
//         }, []);

//             const getAllInfo =()=>(
//             axios.get('http://localhost:5000/api/info/')
//             .then((response)=>{
//             //add our data to state
//                 setInfo(response.data.data);
//                 console.log(response.data.data)
//             })
//             .catch(error => console.error(`Error : ${error}`)
//             ));

//         const projectCards = info.map(object=>{
//         if(object.section === "MyWork"){
//             return   <ProjectCard  key={object.id} img={object.image} name={object.name} />   }
//         else{ return null }
//         })

// return   (
// <div id="Projects" class="mywork">
//                         <h1 class="myWorkTitle">My Work</h1>
//                         <div class="myWorkline"></div>
//                         <div class="conteudo">

//                             <div class="gallery">
//                             <div class="gallery">
//                                 {projectCards}
//                             </div>
//                             </div>

//                         </div>
//                     </div>
//                         )
// }
