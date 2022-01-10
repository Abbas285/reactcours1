import React from 'react'
import {Link} from 'react-router-dom'


function Navigation() {
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      
      <li className="nav-item">
        <Link to="/multipleselectclass" className="nav-link" >Multiple Checkboxes with class </Link>
      </li>
      <li className="nav-item">
        <Link to="/fileupload"  className="nav-link">   FileUpload</Link>
      </li>

      <li className="nav-item">
        <Link to="/Searchrecourd"  className="nav-link">   Search Reacurd</Link>
      </li>
<li className="nav-item">
        <Link to="/Form"  className="nav-link">  Form</Link>
      </li>
   
      <li className="nav-item">
        <Link to="/lifeCycleMethods" className="nav-link " >lifecyclemethodtesting</Link>
      </li>

      <li className="nav-item">
        <Link to="/JavascriptExample" className="nav-link " >Javascript Example</Link>
      </li>


      <li className="nav-item">
        <Link to="/AdvancedJavascript" className="nav-link " >AdvancedJavascript</Link>
      </li>

      <li className="nav-item">
        <Link to="/ReactAuthentication" className="nav-link " >ReactAuthentication</Link>
      </li>
      <li className="nav-item">
        <Link to="/TypeScriptComponent" className="nav-link ">TypeScript Course</Link>
      </li>
     
      <li className="nav-item">
        <Link to="/ReactProject" className="nav-link ">ReactProject</Link>
      </li>
      

      
      <li className="nav-item">
        <Link className="nav-link disabled" href="#">Disabled</Link>
      </li>
      
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navigation
