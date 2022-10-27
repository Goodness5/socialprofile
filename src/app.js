import React from "react";
import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTruckDroplet } from '@fortawesome/free-solid-svg-icons'
import github from './github.png'
import slack from './slack.png'
import i4g from './i4g.png'
import profile from './profile.jpg'
import { useState } from 'react';
// import './github.png'


function App() {
    const [file, setFile]= useState();
    function picchanger(e) {
        document.getElementById('profile').setAttribute('src', file)
      setFile(URL.createObjectURL(e.target.files[0]));
      
    }

    return (
        <>
            <div id="container">
                <div id="toggle"><p>...</p></div>
                <div id="profilet">
                    <input type="file" name="" onChange={picchanger} id="image" />
                    <label for="image">
                    <img id="profile" class="img" src={profile} alt="" width="100%" />
                    </label>
                    
                </div>
                <div id="slack">Goodness Kolapo</div>
                {/* <div ><i></i>superman</div> */}
                <div id="button">
                    <a href="https://twitter.com/goodnesskolapo" id="twitter"> <div class="button" id="twitterlink">goodnesskolapo</div></a>

                    <a id="btn_zuri" href="https://training.zuri.team/">   <div class="button" >Zuri Team</div>  </a>
                    <a id="books" href="http://books.zuri.team">   <div class="button" >
                    <h2>zuri books</h2><p>Access Coding and Design Books.. </p></div>    </a>
                    <a id="book_python" href="https://books.zuri.team/python-for-beginers?ref_id=superman">   <div class="button" >Python Books</div>  </a>
                    <a id="pitch" href="https://background.zuri.team">   <div class="button" >Background Check for Coders</div> </a>
                    <a  id="book_design" href="https://books.zuri.team/design-rules">   <div class="button">
                    <h2>Design Books</h2><p>Access Design Books For FREE..</p></div>  </a>
                </div>
                
                <div class="icons"><img src={slack} alt="" width="10%" class="ic"></img><img src={github} alt="" class="ic"></img></div>
                <div id="footer"><p>zuri <span id="spa"></span> internship</p><img src={i4g} alt="" class="i4g"></img> </div>
                <div class="copy">HNG internship 9 Frontend Task</div>
            </div>
        </>


    )
  }


export default App