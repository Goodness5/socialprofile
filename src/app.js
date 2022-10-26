import React, { useState } from "react";
import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTruckDroplet } from '@fortawesome/free-solid-svg-icons'
import github from './github.png'
import slack from './slack.png'
import i4g from './i4g.png'
// import './github.png'


function App() {
    const [file, setFile]= useState();
    function picchanger(e) {
      setFile(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <>
            <div id="container">
                <div id="toggle"><p>...</p></div>
                <div id="profilet">
                    <input type="file" name="" onChange={picchanger} id="image" />
                    <label for="image">
                    <img id="profile" class="img" src={file} alt="" width="100%" />
                    </label>
                    
                </div>
                <div id="twitter">Goodness Kolapo</div>
                <div id="slack"><i></i>superman</div>
                <div id="button">
                    <a href=""> <div class="button" id="twitterlink">goodnesskolapo</div></a>

                    <a href="#">   <div class="button" id="btn_zuri">Zuri Team</div>  </a>
                    <a href="#">   <div class="button" id="books">Zuri Books</div>    </a>
                    <a href="#">   <div class="button" id="book_python">Python Books</div>  </a>
                    <a href="#">   <div class="button" id="pitch">Background Check for Coders</div> </a>
                    <a href="#">   <div class="button" id="book_design">Design Books</div>  </a>
                </div>``
                
                <div class="icons"><img src={slack} alt="" width="10%" class="ic"></img><img src={github} alt="" class="ic"></img></div>
                <div id="footer"><p>zuri <span id="spa"></span> internship</p><img src={i4g} alt="" class="i4g"></img> </div>
                <div class="copy">HNG internship 9 Frontend Task</div>
            </div>
        </>


    )
  }


export default App