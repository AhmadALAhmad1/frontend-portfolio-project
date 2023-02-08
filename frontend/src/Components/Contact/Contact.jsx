import React from 'react'
import  '../Contact/Contact.css';

function Contact() {
  return (
    <div>
        <section  className='contact' id="Contact">
            <div className="contact-form">
        <h1>Contact <span>Me</span></h1>
            <form action="ouzz1.96@gmail.com" method="get" enctype="text/plain">
                <input type="" placeholder='Your Name' required />
                <input type="email"  name='email' id='' placeholder='E-mail' required />
                <input type="" placeholder='Write a Subject' required />
                <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' required>

                </textarea>
                <input type="submit" name=""  value="Submit" class="btn" />
                </form>
            </div>

          
        </section>
    </div>
  )
}

export default Contact
