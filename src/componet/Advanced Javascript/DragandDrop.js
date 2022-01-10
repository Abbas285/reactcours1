import React, { Component } from 'react'
import img1 from './img1.jpg'

export class DragandDrop extends Component {

    drag=(ev)=>{
        ev.dataTransfer.setData("text", ev.target.id);
    }

    allowDrop=(ev)=>{
        ev.preventDefault();
    
    }

    drop=(ev)=>{
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
   
     allowDrop1=(ev)=> {
        ev.preventDefault();
      }
      
  drag1=(ev)=> {
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
     drop1=(ev)=> {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }


    render() {
        return (
            <div>
                <h1>Drag and Drop</h1>

                <div id="div12" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} 
                style={{width:"350px",height:"100px",padding:"10px",border:"1px solid #aaaaaa",marginLeft:"600px"}}></div>
<br/>
<img id="drag12" src={img1} draggable="true" onDragStart={(event)=>this.drag(event)} width="336" height="69"/>
               <br/>
<br/>
<h3>2nd Example</h3>
<div style={{width:"500px",marginLeft:"500px"}}>
<h2>Drag and Drop</h2>
<p>Drag the image back and forth between the two div elements.</p>

<div id="div1" onDrop={(event)=>this.drop1(event)}
onDragOver={(event)=>this.allowDrop1(event)}
 style={{float:"left",width:"100px"
 ,height:"35px",margin:"10px",padding:"10px",border:"1px solid black"}}>
  <img src={img1} draggable="true" 
  onDragStart={(event)=>this.drag1(event)} id="drag1" width="88" height="31"/>
</div>

<div id="div2" onDrop={(event)=>this.drop1(event)} onDragOver={(event)=>this.allowDrop1(event)}  style={{float:"left",width:"100px"
 ,height:"35px",margin:"10px",padding:"10px",border:"1px solid black"}}></div>

</div>
            </div>
        )
    }
}

export default DragandDrop
