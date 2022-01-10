import React, { Component } from 'react'
import Todoappindex from './TodoApp/Index'

export class index extends Component {

constructor(){
    super()
    this.state={
        activetab:0
    }
}
activetab=(e,taib)=>{
    if(this.state.activetab!==taib){
        this.setState({
            activetab:taib
        })
    }
}
    render() {
        const {activetab}=this.state
        return (
            <div>
                <h1>React Project</h1>

          <button className="btn btn-primary" onClick={(e)=>this.activetab(e,1)}> Todo App</button>

{activetab===1?
 <Todoappindex/>:""
}
               

            </div>
        )
    }
}

export default index
