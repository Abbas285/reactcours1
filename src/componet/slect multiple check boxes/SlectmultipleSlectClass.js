import React, { Component } from 'react'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'
export class SlectmultipleSlectClass extends Component {
    constructor(){
        super()
        this.multiplecheck=[
            {id:1,city:"Karachi"},
            {id:2,city:"Islamabad"},
            {id:3,city:"Lahore"},
            {id:4,city:"Rawalpindi"},
            {id:5,city:"Peshawar"},
            {id:6,city:"Faisalabad"},
            {id:7,city:"Multan"},
        ]
     this.state={
            checkedAllMail:false,
            mailAllArrayIDsToDelete:[],
            multiplecheck:this.multiplecheck
        }
    }
    handleslectall=async()=>{
await this.setState({
    checkedAllMail:!this.state.checkedAllMail
})
let arr=[]
if(this.state.checkedAllMail){
    this.multiplecheck.forEach((el)=>{
        arr.push(el.id)
    })
   this.setState({
    mailAllArrayIDsToDelete:arr
   }) 
    
  
}
else{
    this.setState({
        mailAllArrayIDsToDelete:[] 
    })
}

console.log("selected array",this.state.mailAllArrayIDsToDelete)
    }
    DeleteAllRecourd=()=>{
   
const data=[...this.state.multiplecheck]

const selectedmessage=[...this.state.mailAllArrayIDsToDelete]
let arr=[];
data.forEach(el=>{
    selectedmessage.forEach(er=>{
        if(el.id!==er){
            arr.push(el)
        } 
    })
})
if(arr.length>=0){
    this.setState({
        multiplecheck:arr
    })
}

    }
    handleSinglechange=async(check)=>{
        const {mailAllArrayIDsToDelete}=this.state
      
   
        let idExist,Removecheck; 
   
        idExist= mailAllArrayIDsToDelete.find((el)=>el===check )
    
        if(idExist){
            Removecheck=mailAllArrayIDsToDelete.filter((el)=>el!==check )
                
        await    this.setState({mailAllArrayIDsToDelete:Removecheck} )  
        }
        else{
            mailAllArrayIDsToDelete.push(check);
        await    this.setState(
                {mailAllArrayIDsToDelete:mailAllArrayIDsToDelete}
                
            )
        }
        console.log("selected array",this.state.mailAllArrayIDsToDelete)
       
    }
    deleteSingleRecourd=(id)=>{
        const data=[...this.state.multiplecheck]


        const value=data.filter((er)=>{
            return er.id!==id
        })
        this.setState({
            multiplecheck:value
        })
console.log("delete",id,data)
    }
    render() {
    
       
        const { checkedAllMail,mailAllArrayIDsToDelete } =this.state
        return (
            <div>
            {/* parentCheckboxes */}
            <div className="float-right"> <button className="btn bg-info"> <Link to="/Chieldcheckboxes">Chield components</Link></button></div>
         <div  className="d-inline-flex w-25">
        
        <input type="checkbox"
         id="allslect"
        disabled={this.multiplecheck.length>0?false:true}
         name="allslect" 
         checked={checkedAllMail}
         onChange={this.handleslectall}/>
            
          <label for="allslect">All Select Boxes</label>
   

          <button className="btn bg-info" onClick={this.DeleteAllRecourd}>Delete All</button>
         </div>
             <div className=" d-flex justify-content-center w-75">
             <table  className="table table-center ">
                 <thead><tr>
                     <th></th>
                     <th> City Name</th>
                     <th> Action</th>
                     </tr></thead>
                     <tbody>
                         {   this.state.multiplecheck.length>0?(
                            this.state.multiplecheck&&this.state.multiplecheck.map((row,k)=>{
                             let check = false
                          
                             mailAllArrayIDsToDelete &&mailAllArrayIDsToDelete.map(el=>{
                                 if(el===row.id) 
                                 return (check=true)
                                    })
                                return (<tr key={k}>
                                   
                        <td>
                         {/* Child CheckBoxes */}
                             <input type="checkbox"
                             id={row.id}
                             name="row.city" 
                             checked={check}
                             onChange={()=>this.handleSinglechange(row.id)} /> 
                        </td>
                        <td> <label for="row.city">{row.city}</label></td>
                        <td><button className="btn text-info bg-secondary"
                         onClick={()=>this.deleteSingleRecourd(row.id)}>Delete Checkboxes</button> </td>
                        </tr>)
                            })  
                          ):
                          "" }
                     </tbody>
             </table >
             </div>
         </div>
        )
    }
}

export default SlectmultipleSlectClass
