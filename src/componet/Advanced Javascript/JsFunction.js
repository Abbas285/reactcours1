import React, { Component } from 'react'

export class JsFunction extends Component {
    jsfunctionality=()=>{
        console.log("js function")
    }
    render() {
        return (
            <div>
                <h1>Js Function</h1>
                <button onClick={this.jsfunctionality} className='btn btn-primary'>js functionality</button>
            </div>
        )
    }
}

export default JsFunction
