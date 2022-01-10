import React, { Component } from 'react'

class  parent extends Component{
    constructor(){
        super()
        this.state={
            counter:1
        }
    }
}

export class Oop extends parent {
    constructor(){
        super()
       
    }
    increement=()=>{
this.setState({
    counter:this.state.counter++
})
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Oop


