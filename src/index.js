import React from 'react';
import ReactDOM from 'react-dom/client';
// import './App.css';
// import App from './app.js'
import Contact from  './contact';
// import { socialIcon } from "react-social-icons";
// import { Router} from 'react-router'



const root = ReactDOM.createRoot(document.getElementById('root'));
  // let button = ReactDOM.createRoot(document.getElementById('button'));
  // const profilePic = ReactDOM.createRoot(document.getElementById('profile'));

  
  
root.render(
    <React.StrictMode>
      {/* <App /> */}
      <Contact />
    </React.StrictMode>
);
// profilePic.render(

// )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// export default app()