import React from 'react'
import './Languages.css'

export default function LanguagesImg(props){
return(
    <>
        <img className='languageImg' src={props.image} alt="languages" />
    </>
)
}