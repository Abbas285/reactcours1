import React, { Component, createContext } from 'react'

export class Lifecyclemethodtesting extends Component {
   constructor(){
       super()
       console.log("constructer call");
       this.state={
           show:false
       }

   }
   componentDidMount(){

    console.log("componentDidMount call");
   }
   clickfun=()=>{
   this.setState({
       show:!this.state.show
   })
   }
    render() {
        console.log("render  call");
        return (
            <div>
               {this.state.show?<Child/>:<Coloumnfilter/>} 
                <button onClick={this.clickfun}>click</button>
                
            </div>
        )
    }
}

export default Lifecyclemethodtesting

class Child extends Component {
    componentWillUnmount(){
        console.log("un mount");
    }
    render(){
       return <h1>Child component</h1>
    }
}
function Coloumnfilter() {
    return (
        <div>
            <h3>Child 3</h3>
        </div>
    )
}
