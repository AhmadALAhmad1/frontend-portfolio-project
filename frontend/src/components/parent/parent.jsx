import React, {useState} from "react";
import {useEffect} from 'react';
import axios from "axios";


export default function Parent(){
    // get data from API
    const [info, getInfo] = useState('');
    const url='http://localhost:5000/api/info/'

    useEffect(() => {
        getAllInfo();
    }, []);

    const getAllInfo =()=>(
        axios.get(`${url}`)
        .then((response)=>{

        // const AllInfo =response.data;
        //add our data to state
            getInfo(response.data);
        })
        .catch(error => console.error(`Error: ${error}`)));
        // return(

        //     <p> {info.section} </p>
        // ) 
console.log(info)

}

