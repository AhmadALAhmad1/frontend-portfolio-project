import React ,{useEffect , useState} from 'react';
import "./Header.css";
import github from "./github.png"
import twitter from "./twitter.png"
import facebook from "./facebook.png"
import axios from 'axios';
import HeaderImg from './HeaderImg.jsx';

export default function Header(){
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
    const headerImg = info.map(object=>{ 
    if(object.section=="Header"){
        return   <HeaderImg  key={object.id} img={object.image} />   }
    else{ return null }
    })


    return<>
    <div id="Header">
        <div className="headerSection">
            <div class="section1Ancers">
                <a href="#" className="section1Ancer"><img className="section1AncerImg" src={github} alt="a" /></a>
                <a href="#" className="section1Ancer"><img className="section1AncerImg" src={twitter} alt="a" /></a>
                <a href="#" className="section1Ancer"><img className="section1AncerImg" src={facebook} alt="a" /></a>
            </div>
            <div className="border"></div>
            <div className="section1Content">
                <div className="salut">
                    <h1>Hi,</h1>
                    <div className="salutMyName">
                        <h1>I'm &nbsp;</h1>
                        <h1 className="salutName" >Ousama</h1>
                        <h1>,</h1>
                    </div>
                    <div className="domain">
                        <h1>Web Dev</h1>
                        <h1>.</h1>
                    </div>
                </div>                
                <div className="skills"><p>Bootstrap</p><p>/&nbsp; </p><p>Javascript</p><p>/&nbsp;</p><p>React</p></div>
                <a className="contactSection1Btn" href="#ContactSection">Contact Me</a>
            </div>
            {headerImg} 
       </div>
    </div>
      
    </>
  
}
