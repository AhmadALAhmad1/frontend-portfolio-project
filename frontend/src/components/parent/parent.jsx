// import React, {useState} from "react";
// import {useEffect} from 'react';
// import axios from "axios";


// export default function Parent(){

//     // get data from API
//     const [info, setInfo] = useState([]);
//     const url='http://localhost:5000/api/info/'

//     useEffect(() => {
//         getAllInfo();
//     }, []);

//     const getAllInfo =()=>(
//         axios.get(`${url}`)
//         .then((response)=>{

//         // const AllInfo =response.data;
//         //add our data to state
//             setInfo(response.data);
//             console.log(response.data.data);
//         })
//         .catch(error => console.error(`Error: ${error}`)));
//         // return(

//         //     <p> {info.section} </p>
//         // ) 
// // console.log(info)

// }

