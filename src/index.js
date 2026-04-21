import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import CarShowRoom from './Cars/App.js';
import reportWebVitals from './reportWebVitals';
//import ShowTargetRun from './State/App.js'
//import SimpleCounter from './State1/App.js';
//import Showcards from './Arrays2.js';
import AddSkills from './AddSkills/Addskills.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
//const run=5;
root.render(
  <React.StrictMode>
    <AddSkills />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
