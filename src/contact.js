import React from "react";
import './contact.css'
import i4g from './i4g.png'
// import './App.css'
// import { Router, Route} from 'react-router'

function Contact() {
    return (
<div>
            <div class="top">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind</p>
            </div>


            <div class="form">
                <form>
                <div class="f1">
                <div class="firstname">
                    <label for="last_name">First name</label>
                    <input id="first_name" type="text" placeholder="Enter your first name"></input>
                    </div>
                    <div class="lastname">
                    <label for="last_name" class="lab">Last name</label>
                    <input id="last_name" type="text" placeholder="Enter your last name"></input>
                    </div>
                    </div>
                    <label for="email">Email</label>
                    <input id="email" type="mail" placeholder="yourname@example.com"></input>
                    
                    <label for="message">Message</label>
                    <textarea id="message" placeholder="Send me a message and i'll reply as soon as possible"></textarea>
                    
                    <div class="check">
                    <label for="check" class="msg">you agree to providing your data to Goodness Kolapo who may contact you</label>
                    <input type="checkbox" id="check"></input>
                    </div>
                    <button type="submit" id="btn__submit">Send message</button>
                </form>
                </div>
                <div id="footer"><p class="zuri">zuri <span id="spa"></span> internship</p><img src={i4g} alt="" class="i4g"></img> </div>
                <div class="copy">HNG internship 9 Frontend Task</div>
            
</div>
    )
}

export default Contact;