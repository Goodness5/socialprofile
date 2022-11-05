import React from 'react';
import ReactDOM from 'react-dom/client';
// import './App.css';
import App from './app.js'
// import Contact from './contact.js';
// import { BrowserRouter } from "react-router-dom";

// import { Router, Routes, Route} from 'react-router'


const root = ReactDOM.createRoot(document.getElementById('root'));


 /* <Router>
 <Routes>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/" element={<App/>}></Route>
            
     </Routes>
     </Router>  */
     
  
root.render(
      <App />
      
);
// profilePic.render(

// )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// export default app()