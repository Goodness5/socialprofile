import React from "react";
import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTruckDroplet } from '@fortawesome/free-solid-svg-icons'
import github from './github.png'
import slack from './slack.png'
import i4g from './i4g.png'
import profile from './profile.jpg'
import { Router, Route, Routes} from 'react-router'
import Contact from "./contact";



function App() {
    // <Router>
    return (
            <div id="container">
                <div id="toggle"><p>...</p></div>
                <div id="profilet">
                    <input type="file" name=""  id="image" />
                    <label for="image">
                    <img id="profile__img" class="img" src={profile} alt="" width="100%" />
                    </label>
                    
                </div>
                <div id="twitter">Goodness Kolapo</div>
                <div id="slack">superman</div>
                <div id="button">
                    <a href="https://twitter.com/goodnesskolapo" id="twitter"> <div class="button" id="twitterlink">Twitterlink</div></a>

                    <a id="btn__zuri" href="https://training.zuri.team/">   <div class="button" >Zuri Team</div>  </a>
                    <a id="books" href="http://books.zuri.team">   <div class="button" >zuri books</div>    </a>
                    <a id="book__python" href="https://books.zuri.team/python-for-beginers?ref_id=superman">   <div class="button" >Python Books</div>  </a>
                    <a id="pitch" href="https://background.zuri.team">   <div class="button" >Background Check for Coders</div> </a>
                    <a  id="book__design" href="https://books.zuri.team/design-rules">   <div class="button">Design Books</div>  </a>
                    <a  id="contact" href="/contact">   <div class="button">Contact Me</div>  </a>
                </div>
                
                <div class="icons"><img src={slack} alt="" width="10%" class="ic1"></img><img src={github} alt="" class="ic2"></img></div>
                <div id="footer"><p>zuri <span id="spa"></span> internship</p><img src={i4g} alt="" class="i4g"></img> </div>
                <div class="copy">HNG internship 9 Frontend Task</div>

            </div>
     


    )
    {/* <Routes>
    <Route path="contact" element={<Contact/>}></Route>
            
    </Routes>
    </Router> */}
    }



    export default App;
