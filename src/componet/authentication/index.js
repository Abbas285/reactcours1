import React, { Component } from 'react'

export class index extends Component {
  constructor(){
    super()
    this.multiplevalue=[
{id:1,cityname:"islamabad"},
{id:2,cityname:"Lahore"},
{id:3,cityname:"Mansehra"},
{id:4,cityname:"Abbottabad"}]

    this.state={
      multiplevalue:[],
      multipleitem:[]
    }
  }
  componentDidMount(){
this.setState({
  multiplevalue:this.multiplevalue
})
  }

  checkitem=(e,data,dataindex)=>{
    const {name,value,checked}=e.target
const itemselect=[...this.state.multipleitem]
const model=[...this.state.multiplevalue]

if(name==="parent"){
  model.map(user=>{
    user.ischeck=checked
  })
this.setState({
  multiplevalue:model
},()=>{
 this.state.multiplevalue.map(value=>{
   if(value.ischeck){
    itemselect.push(value)
   }
   else{
    itemselect.pop(value) 
   }
 })
 this.setState({
  multipleitem:itemselect
 },()=>console.log("selected item",this.state.multipleitem))
})
}

else{
  model.map((user)=>{
   return user.cityname===name? user.ischeck=checked:user
  })
  this.setState({
    multiplevalue:model
  },()=>{
const index=model.indexOf(data)
if(model[index].ischeck){
itemselect.push(data)
}
else{
  itemselect.pop(data)
}
this.setState({
  multipleitem:itemselect 
},()=>console.log("selected item",this.state.multipleitem))

  })
}

 }

  allcheckbox=(e)=>{
    const model=[...this.state.multiplevalue]
    const itemselect=[...this.state.multipleitem]

    model.map((value)=>{
      value.ischeck=!value.ischeck
          })

    let checkvalue=this.state.multiplevalue.every((value)=>{
      return value.ischeck===true
    })
if(checkvalue){
  model.map((value)=>{
itemselect.push(value)
  })
}
else{
  model.map((value)=>{
    itemselect.pop(value)
      })
}
    this.setState({
      multiplevalue: model,
      multipleitem:itemselect
    })
  }
  deleterecourd=(data)=>{
    const itemselect=[...this.state.multipleitem]
      const model=[...this.state.multiplevalue]
     const filterdata= model.filter(value=>{
        return value.id!==data.id
      })
      this.setState({
        multiplevalue:filterdata
      })
  }

  selectitem=(index,value)=>{
    const itemselect=[...this.state.multipleitem]
    const model=[...this.state.multiplevalue]
    const indexf=model.indexOf(value)
   
    if(model[indexf].ischeck){
      itemselect.push(value)
      this.setState({
        multipleitem:itemselect
      })
    }

    else{
      itemselect.pop(value)
      this.setState({
        multipleitem:itemselect
      })
    }
  }

  deleteallrecurd=()=>{
    const itemselect=[...this.state.multipleitem]
    const model=[...this.state.multiplevalue]

    console.log("delete All recourd")
  }
  render() {
    return (
      <div style={{marginTop:"60px"}}>
        <button className="btn btn-primary" onClick={()=>this.deleteallrecurd()}> Delete All</button>
      <input type="checkbox" name="parent" id="parent" 
  
      onChange={this.checkitem}
      checked={!this.state.multiplevalue.some((user) => user?.ischeck !== true)}/>
     <label htmlFor="parent">all checkbox</label>
        <br/>
        <br/>
        <br/>
        {
          this.state.multiplevalue.map((value,index)=>{
            return <React.Fragment key={index}>   
     <input type="checkbox" name={value.cityname}
     id={value.cityname} 
    onChange={(e)=>this.checkitem(e,value,index)}
     checked={value?.ischeck||false} />
     <label htmlFor={value.cityname} style={{marginRight:"40px",marginBottom:"40px"}}>{value.cityname}</label>
     <button className="btn btn-primary " style={{marginBottom:"10px"}} onClick={()=>this.deleterecourd(value)}> Delete item</button>

     <br/>
            </React.Fragment> 
          })
        }
      </div>
    )
  }
}

export default index

