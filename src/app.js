import React from "react";
import './App.css'
// import { FontAwesomeIcon } from '@htmlFortawesome/react-fontawesome'
// import { faTruckDroplet } from '@htmlFortawesome/free-solid-svg-icons'
import github from './github.png'
import slack from './slack.png'
import i4g from './i4g.png'
import profile from './profile.jpg'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Contact from "./contact";
import toggle from "./toggle.png"
// import { Link } from "react-router-dom"



function App() {
    
    // const navigate = useNavigate();

    // const navigateToContact = () => {
    //   navigate('/contact')
    // }
    
    return (
            <div>

                 <BrowserRouter>
<Routes>
        <Route path="/contact" element={ <Contact/> } />
        <Route path='/' element={<div>
            <div id="container">
                <div id="toggle"><img src={toggle} alt="..."></img></div>
                <div id="profilet">
                    <input type="file" name=""  id="image" />
                    <label htmlFor="image">
                    <img id="profile__img" className="img" src={profile} alt="" width="100%" />
                    </label>
                    
                </div>
                <div id="twitter">Goodness Kolapo</div>
                <div id="slack">superman</div>
                <div id="button">
                    <a href="https://twitter.com/goodnesskolapo" id="twitter"> <div className="button" id="twitterlink">Twitterlink</div></a>

                    <a id="btn__zuri" href="https://training.zuri.team/">   <div className="button" >Zuri Team</div>  </a>
                    <a id="books" href="http://books.zuri.team">   <div className="button" >zuri books</div>    </a>
                    <a id="book__python" href="https://books.zuri.team/python-htmlFor-beginers?ref_id=superman">   <div className="button" >Python Books</div>  </a>
                    <a id="pitch" href="https://background.zuri.team">   <div className="button" >Background Check htmlFor Coders</div> </a>
                    <a  id="book__design" href="https://books.zuri.team/design-rules">   <div className="button">Design Books</div>  </a>
                    <a  id="contact" href='/contact'>   <div className="button">Contact Me</div>  </a>
                    
                </div>
                
                <div className="icons"><img src={slack} alt="" width="10%" className="ic1"></img><a href="https://github.com/goodness5"><img src={github} alt="" className="ic2"></img></a></div>
                <div id="footer"><p>zuri <span id="spa"></span> internship</p>
                <img src={i4g} alt="" className="i4g"></img> 
                <div className="copy">HNG internship 9 Frontend Task</div>
                </div>
        </div>
        </div>}/>
      </Routes>
      </BrowserRouter> 
            </div>
         
     )
    }
    


    
     

    export default App;
