import React, { Component } from 'react'



export class Iteratorobj extends Component {


Iteratorfunction=()=>{
    let number=[100,200,300]
    let itrators=number[Symbol.iterator]()
    // console.log(itrators.next())
    // console.log(itrators.next().value)
    // console.log(itrators.next())
    // console.log(itrators.next().done)
    let result =itrators.next()


    while(!result.done){
        console.log(result.value)
        result =itrators.next()
    }
}

iteratorSymbol=(arr)=>{
    let nextNumer=0;
   return {
    next(){
        if(nextNumer<arr.length){
            return{
                value:arr[nextNumer++],
                done:false
            }    
        }
        else{
            return{
                value:arr[nextNumer++],
                done:true
            }    

        }
      

        }
   }
}

anotherIteratorfunction=()=>{
    let number=[100,200,300]
    let iteratiorvalue=this.iteratorSymbol(number)
    iteratiorvalue.next()
    iteratiorvalue.next()
    console.log(iteratiorvalue.next())
    console.log(iteratiorvalue.next())
    console.log(iteratiorvalue.next())


}

    componentDidMount(){

        // this.Iteratorfunction()
        this.anotherIteratorfunction()
    }
    render() {
        return (
            <div>
                <h1>Itrators</h1>
            </div>
        )
    }
}

export default Iteratorobj
