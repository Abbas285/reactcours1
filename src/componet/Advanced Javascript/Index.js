import React, { Component } from 'react'
import Basicjavascript from './Basicjavascript'
import OOPCONCEPT from './Oop'
import Promise from './promise'
import AsyncFunction from './AsyncFunction'
import JsObject from './JsObject'
import DragandDrop from './DragandDrop'
import Symbel from './Symbel'
import ReactDnd from './React Dnd/index'
import Iterators from './Iteratorobj'
import Generators from './Generators'
import ErrorHandling from './ErrorHandling'
import StricktmODE from './StricktMode.js'
import Jsfunction from './JsFunction'
export class Index extends Component {
constructor(){
    super()
    this.state={
        activetab:0
    } 
}

activetabfun=(e,tabid)=>{
    this.setState({
        activetab:tabid
    })

}
    render() {

        const {activetab}=this.state
        return (
        <>
            <div  >
                
                <h1> Advanced Javascript</h1>
                <div className='row'>
                    <div className='col-12'>

                    <button className="btn btn-secondary mr-3 " 
         onClick={(e)=>this.activetabfun(e,1)} style={{marginRight:"20px",marginBottom:"20px"}}> Basic   </button> 


   <button className="btn btn-secondary ml-2" 
         onClick={(e)=>this.activetabfun(e,2)} style={{marginRight:"20px",marginBottom:"20px"}}>OOP Concept </button>

<button className="btn btn-secondary ml-2"  
         onClick={(e)=>this.activetabfun(e,3)} style={{marginRight:"20px",marginBottom:"20px"}}>Promise </button>

<button className="btn btn-secondary ml-2"  
         onClick={(e)=>this.activetabfun(e,4)} style={{marginRight:"20px",marginBottom:"20px"}}>AsynC Function </button>


         
<button className="btn btn-secondary ml-2"  
         onClick={(e)=>this.activetabfun(e,5)} style={{marginRight:"20px",marginBottom:"20px"}}>Js Object </button>

<button className="btn btn-secondary ml-2"  
         onClick={(e)=>this.activetabfun(e,6)} style={{marginRight:"20px",marginBottom:"20px"}}>DragandDrop </button>


<button className="btn btn-secondary ml-2"  
         onClick={(e)=>this.activetabfun(e,7)} style={{marginRight:"20px",marginBottom:"20px"}}>Symbols </button>

         
<button className="btn btn-secondary ml-2"  
         onClick={(e)=>this.activetabfun(e,8)} style={{marginRight:"20px",marginBottom:"20px"}}>React Dnd </button>

         
<button className="btn btn-secondary ml-2"  
         onClick={(e)=>this.activetabfun(e,9)} style={{marginRight:"20px",marginBottom:"20px"}}>Iterators </button>


<button className="btn btn-secondary ml-2"  
         onClick={(e)=>this.activetabfun(e,10)} style={{marginRight:"20px",marginBottom:"20px"}}>Generators</button>



                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>

                    <button className="btn btn-secondary ml-2"  
         onClick={(e)=>this.activetabfun(e,11)} style={{marginRight:"20px"}}>Error Handling</button>

         <button className="btn btn-secondary ml-2"  
         onClick={(e)=>this.activetabfun(e,12)} style={{marginRight:"20px"}}>Strict Mode</button>

<button className="btn btn-secondary ml-2"  
 onClick={(e)=>this.activetabfun(e,13)} style={{marginRight:"20px"}}>Js Function</button>




                    </div>

                </div>
        


            </div>
<br/>




{activetab===1&&
   <Basicjavascript/>
}
{activetab===2&&
    <OOPCONCEPT/>
}
{   activetab===3&&
    <Promise/>
}
{
 activetab===4&&  
 <AsyncFunction/> 
}

{
 activetab===5&&  
 <JsObject/> 
}
{
 activetab===6&&  
 <DragandDrop/> 
}

{
 activetab===7&&  
 <Symbel/> 
}

{
 activetab===8&&  
 <ReactDnd/> 
}


{
 activetab===9&&  
 <Iterators/> 
}


{
 activetab===10&&  
 <Generators/> 
}
{
 activetab===11&&  
 <ErrorHandling/> 
}
{
 activetab===12&&  
 <StricktmODE/> 
}


{
 activetab===13&&  
 <Jsfunction/> 
}


</>

        )
    }
}

export default Index
