import React from "react";
import "./hub.css"
import { NavLink } from "react-router-dom"



function Hub() {
  return <>
  <br></br>
  <center><h1>Resume Builder</h1></center>
  <div className="container">
    
  <button ><NavLink className= "btn1" to="/Homepage1">Template 1</NavLink></button>
  <button><NavLink  className= "btn" to="/Homepage2">Template 2</NavLink></button>
  </div>
    
    
  </>
}



export default Hub;