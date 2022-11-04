import React from "react";
import './contact.css'
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
                    <label for="last_name">First name</label>
                    <input id="first_name" type="text" placeholder="Enter your first name"></input>
                    <label for="last_name">Last name</label>
                    <input id="last_name" type="text" placeholder="Enter your last name"></input>
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
</div>
    )
}

export default Contact;