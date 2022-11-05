import React from "react";
import './contact.css'
import i4g from './i4g.png'
// import './App.css'
// import validateForm from './formErrors'


function Contact () {
        
        return (
<div>
            <div className="top">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind</p>
            </div>


            <div className="form">
                <form>
                <div className="f1">
                {/* <FormErrors formErrors={this.state.formErrors} /> */}
                <div className="firstname">
                    <label htmlFor="last_name">First name</label>
                    <input id="first_name" type="text" placeholder="Enter your first name"></input>
                    </div>
                    <div className="lastname">
                    <label htmlFor="last_name" className="lab">Last name</label>
                    <input id="last_name" type="text" placeholder="Enter your last name"></input>
                    </div>
                    </div>
                    {/* <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}></div> */}
                    <label htmlFor="email">Email</label>
                    <input id="email" type="mail" placeholder="yourname@example.com"></input>
                    
                    {/* <div className={`form-group ${this.errorClass(this.state.formErrors.message)}`}></div> */}
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Send me a message and i'll reply as soon as possible"></textarea>
                    
                    <div className="check">
                    <label htmlFor="check" className="msg">you agree to providing your data to Goodness Kolapo who may contact you</label>
                    <input type="checkbox" id="check"></input>
                    </div>
                    <button type="submit" id="btn__submit" >Send message</button>
                </form>
                </div>
                <div id="footer"><p className="zuri">zuri <span id="spa"></span> internship</p><img src={i4g} alt="" className="i4g"></img> </div>
                <div className="copy">HNG internship 9 Frontend Task</div>
            
</div>
    )
    
}

export default Contact;