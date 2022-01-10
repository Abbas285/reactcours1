import React,{useEffect} from 'react'
let array=[10,20,30,40]
function Basicjavascript() {
const argumentss=(a,b,...rest)=>{

let sum=0
for(let i in rest){
sum += rest[i]
}
console.log("value of sum",sum)

}
const spradopeartor=()=>{
    const array1=[1,2,3,4,5,6]
    const arr2=[...array1]
    arr2.push(3)
    console.log("array2 value",arr2)
    arr2.unshift(5)
    
    console.log("array2 value",arr2)
    console.log("array1 value",array1)
}
const objectLiteral=()=>{

let name="Abbas Ali"
let value="value123"

const obj={
    name,
    value
}
    console.log("objectLiteral",obj.name)
    let a="name"
    let b="value"
    const obj2={
        [a+"value"]:"alishah",
        [b+"name"]:"1234"
    }
    console.log("obj2",obj2)
const obj3={
    [a+"update"]:"update name value",
    [b+"update"]:"update value",
    course:"abcd",
    detail:function(){
        console.log("detail fun",this.course)
      return  `course name ${this.course}`
    },
    updatefun(){
        console.log("updatefun ",this.course)
        return `coursename${this.course}`
    },
  'newEs6 function'(){
    },
    newupdate(name,value){
        return { name,value}

    }

}


console.log("obj3 is",obj3.updatefun())
console.log("obj update function with object literals",obj3['newEs6 function']())
console.log("updatefunction obj3 with object literals",obj3['detail']())

console.log("function return object",obj3.newupdate("ali","shah"))
let obj3update=obj3.newupdate("abbas","ali")
console.log("function return object",obj3update.name)

}


    useEffect(() => {
        // argumentss("abbas","ali",50,80,90)
        // argumentss(50,70,30)
        // argumentss(...array)
        // spradopeartor()
        objectLiteral()

    })
    return (
        <div>
            
        </div>
    )
}

export default Basicjavascript

