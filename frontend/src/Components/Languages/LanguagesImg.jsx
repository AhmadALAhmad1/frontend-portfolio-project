import React from 'react'
import './Languages.css'

export default function LanguagesImg(props){
    const styles={
        width:"200px", 
        height:"auto" 
    }
return(
    <>
        <img className='languageImg' style={styles} src={props.image} alt="languages" />
    </>
)
}