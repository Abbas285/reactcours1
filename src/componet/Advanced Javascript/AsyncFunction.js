import React, { Component } from 'react'

export class AsyncFunction extends Component {
   
exampleelements=async()=>{
    return "Hello"
}

asyncfunction2=async()=>{
console.log("A")

await console.log("B")
console.log("C")
console.log("D")

}
callbackchild=(result)=>{
console.log("result",result)
}
callbackfunction=(a,b,callbackchild)=>{
let c=a+b;
callbackchild(c)

}
componentDidMount(){
// this.asyncfunction2()
// console.log("Ac after")

    // this.exampleelements()
    // .then((result)=>{
    //     console.log(result)
    // })
}



    render() {
        return (
            <div>
                Asynic function 
                <br/>
  <button className='btn btn-primary'
  onClick={()=>this.callbackfunction(10,40,this.callbackchild)}> 
  Callback function</button>
            </div>
        )
    }
}

export default AsyncFunction
