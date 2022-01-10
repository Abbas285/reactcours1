import React, { Component } from 'react'

export class promise extends Component {
    constructor(){
        super()
        this.state={
            value:true
        }
    }
    

promisefun=(value)=>{
    return new Promise((resolve,rejected)=>{
        setInterval((value)=>{
            if(value===true){
                return resolve("promise is true")
            }
            if(value===false){
                return rejected("false promise")
            }
        },1000)

    })
   
}
promoseall=()=>{
    let p1=new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            console.log("1st promose")
resolve(100)
        },1000)
    })

    let p2=new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            console.log("2nd promose")
            rejected("field")
        },2*1000)
    })
    
    let p3=new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            console.log("3rd promose")
resolve(20)
        },3*1000)
    })
    Promise.all([p1,p2,p3]).then((result)=>{
        console.log("promosis result",result)
    }).catch((error)=>{
console.log("error",error)
    })



}


componentDidMount(){
  this.promoseall()

//    console.log(this.promisefun(this.state.value))
//    this.promisefun(this.state.value).then((value)=>{
//        return console.log(value)
//    })
//    this.promisefun(this.state.value).catch((value)=>{
//        return console.log(value)
//    })
// this.promisefun(this.state.value).then((result)=>{
//    return console.log(result)
// })
// .catch((value)=>{
//  return   console.log(value)
// })


}

    render() {
        return (
            <div>
                <h1>Promise</h1>
            </div>
        )
    }
}

export default promise
