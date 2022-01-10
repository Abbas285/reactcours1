import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navigattion from './navigation/Navigation'
import {Switch,Route,Link} from 'react-router-dom'
import fileupload from './fileupload/fileupload'
import SlectmultipleClass from './slect multiple check boxes/SlectmultipleSlectClass'
import Searchrecourd from './Search recurd/Search'
import Form from './form/Form'
import Chieldcheckboxes from './slect multiple check boxes/Selectmultiplecheckboxes'
import FilteringtableData from './form/FilteringData'
import LifeCycleMethods from './lifeCyclemethods/Lifecyclemethodtesting'
import JavascriptExample from './javaSscriptExample/JavascriptExample'
import ReactAuthentication from './authentication/index'

import ReactProject from './React Project/index'
import './../../node_modules/bootstrap/js/dist/dropdown'
import  AdvancedJavascript from './Advanced Javascript/Index'
import TypeScriptComponent from './TypeScript/index'
function index() {
    return (
        <div>
          <Navigattion/>
<Switch>
  
  <Route path="/multipleselectclass" component={SlectmultipleClass}/>
  <Route path="/fileupload" component={fileupload}/>
  <Route path="/Searchrecourd" component={Searchrecourd}/>
  <Route path="/Chieldcheckboxes" component={Chieldcheckboxes}/>
  <Route path="/Form" component={Form}/>
  <Route path="/FilteringtableData" component={FilteringtableData}/>
  <Route path="/lifeCycleMethods" component={LifeCycleMethods}/>
  <Route path="/JavascriptExample" component={JavascriptExample}/>
  <Route path="/AdvancedJavascript" component={AdvancedJavascript}/>

  <Route path="/ReactAuthentication" component={ReactAuthentication}/>

  <Route path="/ReactProject" component={ReactProject}/>
  
  <Route path="/TypeScriptComponent" component={TypeScriptComponent}/>
  

</Switch>

 
        </div>
    )
}

export default index
