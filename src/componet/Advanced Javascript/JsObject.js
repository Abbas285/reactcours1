import React, { Component } from 'react'

export class JsObject extends Component {
    constructor(){
        super()
        this.state={
            person :{
                firstname: "John",
                lastname: "Doe",
                age: 50,
                eyecolor: "blue"
              }
        }
    }
    addnewvalue=()=>{
     const persondata={...this.state.person}   
     persondata.nationality="pakistani"
     persondata.city="Islamabad"
    this.setState({
  person:persondata
    })
      
    }
    deletevalue=()=>{
        const persondata={...this.state.person} 
        delete persondata.nationality
        this.setState({
            person:persondata
        })
    }

    handleDisplay=()=>{
        const person = {
            name: "John",
            age: 30,
            city: "New York"
          };
          const objectvalues=Object.values(person)
          const objectkeys=Object.keys(person)
          const objectenteries=Object.entries(person)
          const objectStrigify=JSON.stringify(person)

          console.log("Object values",objectvalues,"and Object keys",objectkeys
          ,"Object Enteries",objectenteries,"objectStrigify",objectStrigify)


          let date=new Date().toString()
          let splitdate=date.split(' ')
          
          console.log("date",splitdate)
    }
    handleAccessors=()=>{

        const person = {
            firstName: "John",
            lastName: "Doe",
            language: "en",
            get lang1(){
                return this.lastName
            },
            set lang(value) {
                this.language = value;
              },
            set getfun(value) {
                  this.lastName =value
              }

        }
      

        person.lang="abbas"
        person.getfun="accessor function alllllllll"
        console.log("Accessor",person.language,person.lang1,person.getfun)

        

// Define setters

    }
   
    objectConstructor=()=>{

    }
  
  objectSet=()=>{
      const arrayvalue= new Set(["abbas","ali","shah","shah",])
      console.log(arrayvalue.size)
      arrayvalue.add("mansehra")
      console.log(arrayvalue.size)
    //   for (const iterator of arrayvalue) {
    //       console.log(arrayvalue[iterator])
          
    //   }
    arrayvalue.forEach((value)=>{
        return console.log("for each",value)
    })

    console.log("values",arrayvalue.values())

    let text = "";
for (const x of arrayvalue.values()) {
text = x 
console.log(text)
}
let texts = "";
for (const x of arrayvalue.keys()) {
    texts = x 
console.log(texts)
}

  }
  objectMaps=()=>{
   

      const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
      ]);
      console.log("get spacific value",fruits.get("apples"))
      console.log("set value",fruits.set("appless",1000))
      console.log("set value",fruits.set("appless",10000))

      console.log("get Size",fruits.size)
      console.log("delee value",fruits.delete("appless"))
      console.log("get Size",fruits.size)
    //   console.log("remove all value",fruits.clear())
      console.log("get Size",fruits.size)
      console.log("has value",fruits.has("oranges"))
     fruits.forEach((value,key)=>{
         return console.log(key+"    "+ value)
     })
    

 
      

  }


    render() {
        const obj = {counter : 0};
        const {person}=this.state

        const myObj = {
            name: "John",
            age: 30,
            cars: {
            car1: "Ford",
            car2: "BMW",
            car3: "Fiat"
            }
          }
          console.log(myObj['cars']['car3'])


          const myObj1 = {
            name: "John",
            age: 30,
            cars: [
              {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
              {name:"BMW", models:["320", "X3", "X5"]},
              {name:"Fiat", models:["500", "Panda"]}
            ]
          }
          for(let j in myObj1.cars){
              console.log(`<h1>${myObj1.cars[j].name}<h1>`)
              for(let k in myObj1.cars[j].models ){
                  console.log(myObj1.cars[j].models[k])
              }
          }
          console.log("nested object",myObj1.cars)



        return (
            <div>
            <p>
                {/* {
                  Object.keys(person).map(value=>{
                      return <>
                      {
                          <span>{value}</span>
                      }<br/>
                      </>
                  })
                } */}

                {
                   Object.entries(person).map(value=>{
                        return <><span className=''>{value}</span><br/></>
                    })
                }
                <button onClick={this.addnewvalue} className='btn btn-secondary'style={{marginRight:"10px"}}>
                    add new value
                </button>
                <button onClick={this.deletevalue} className='btn btn-secondary'>
                    delete  value
                </button>

                <br/>
                <button className='btn btn-primary mt-3 ' 
                onClick={this.handleDisplay} style={{marginRight:"10px"}}>display object</button>

                <button className='btn btn-primary mt-3 ' onClick={this.handleAccessors} 
                style={{marginRight:"10px"}}>JavaScript Object Accessors</button>

                  <button className='btn btn-primary mt-3 ' onClick={this.objectConstructor} 
                style={{marginRight:"10px"}}>JavaScript Object Constructors</button>


                   <button className='btn btn-primary mt-3 ' onClick={this.objectSet} 
                style={{marginRight:"10px"}}>Object Sets</button>

                  <button className='btn btn-primary mt-3 ' onClick={this.objectMaps} 
                style={{marginRight:"10px"}}>Object Maps</button>



            </p>
            </div>
        )
    }
}

export default JsObject
