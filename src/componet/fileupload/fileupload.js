import React, { Component } from 'react'
import axios from 'axios'
const getFQDN = require('get-fqdn');

var NpmApi = require('npm-api');
export class fileupload extends Component {
    state={
textfile:'',
ipdaddress:"",
hostname:"",
systemhostname:"",
systemhostname2:"",
hostname:'',
ipdaddress12:""

    }
    uploadfile=(e)=>{
        let file=e.target.files;
        let reder=new FileReader();
        reder.readAsText(file[0]);
        reder.onload=e=>{
            // const file=e.target.result.split(/\r\n|\n/).join('\n');
            this.setState({
                textfile:e.target.result
            })
        }
       
        // console.log("files",files)
    }
  
    GetComputerName=()=>{
        var network =  window.ActiveXObject;
        // Show a pop up if it works
        console.log(network)
    }

    getips = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log("responce data",res.data);
        var windowhost   = window.location.protocol + "//" + window.location.host;
        let ab=document.location;
        console.log("locotion",document.location)
        this.setState({
            ipdaddress:res.data.IPv4,
            hostname:windowhost,
            systemhostname:ab.host
        })
      }
    render() {
        const {textfile}=this.state
        return (
            <div>

        
        <div>
            <h1>get IP Address = {this.state.ipdaddress} <br/>
            windowhost host name + window protocol =  {this.state.hostname}<br/>
            <br/> current hostname{this.state.hostname} and ip address {this.state.ipdaddress12}<br/>
            system host name=  {this.state.systemhostname2}<br/>
            system host name2 =  {this.state.systemhostname}</h1> 
            <button onClick={this.getips}>get ipaddress</button>
            <button onClick={this.GetComputerName}>get name</button>
        </div>

        </div>
    )
}         
    
}

export default fileupload
