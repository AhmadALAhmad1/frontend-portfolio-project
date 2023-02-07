import React from 'react';
import  '../About/About.css';
import image1 from '../../assets/image1.jpg'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


function About() {
  //   const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/data')
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);


  
return (
    <div className='container'>
        
        <div className="content">

            <div className="image1">
            <img src={image1} alt="image1" />
            </div>
            <div className="col2">
            <div className='text'>
                <h2>About</h2>
                <div className="line"></div>
            
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi fugit facilis vero dolore tempore officiis ipsum quisquam. Voluptate cupiditate corporis blanditiis fuga enim laboriosam, eligendi perspiciatis sunt! Quod, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius minima eum nesciunt nihil error id nisi corrupti quisquam explicabo dolore, voluptatem voluptates expedita ipsa obcaecati deleniti aliquam accusantium. Sint, ea?
                    </p>
              </div>

            </div>

        </div>
        
        
        
    </div>

)
}

export default About;
