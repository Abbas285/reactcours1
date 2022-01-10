import React, { Component } from 'react'

export class JavascriptExample extends Component {
    
    render() {

const arraydata=[
{"id":1,"first_name":"Skipton","last_name":"Balharry"},
{"id":2,"first_name":"Cordelie","last_name":"Haggith"},
{"id":3,"first_name":"Ephrem","last_name":"Bootland"},
{"id":4,"first_name":"Scot","last_name":"Rolland"},
{"id":5,"first_name":"Jorie","last_name":"Tellett"},
{"id":6,"first_name":"Mortie","last_name":"Nafzger"},
{"id":7,"first_name":"Juditha","last_name":"Scutching"},
{"id":8,"first_name":"Lenette","last_name":"De Matteis"},
{"id":9,"first_name":"Marlene","last_name":"Kelsall"},
{"id":10,"first_name":"Brewster","last_name":"Iannazzi"},
{"id":11,"first_name":"Renie","last_name":"Kolin"},
{"id":12,"first_name":"Cazzie","last_name":"Cleal"},
{"id":13,"first_name":"Marja","last_name":"June"},
{"id":14,"first_name":"Miriam","last_name":"MacVagh"},
{"id":15,"first_name":"Ogden","last_name":"Tippings"},
{"id":16,"first_name":"Nellie","last_name":"Woodall"},
{"id":17,"first_name":"Kerwin","last_name":"Witherow"},
{"id":18,"first_name":"Dolorita","last_name":"Roskam"},
{"id":19,"first_name":"Cass","last_name":"Banker"},
{"id":20,"first_name":"Huey","last_name":"Ivers"},
       
    ]
    let text = "HELLO WORLD";
        return (
            <div>
                <h5> String (1)Slice () method</h5>
                {
                    arraydata.slice([15],[18]).map((row,index)=>{
                        return <h6 key={index}> ID {row.id} First Name {row.first_name} LastName {row.last_name}</h6>
                    })
                }
         <h5> String (2)substring() method</h5>
         {/* {
                    arraydata.substring(7,13).map((row,index)=>{
                        return <h6 key={index}> ID {row.id} First Name {row.first_name} LastName {row.last_name}</h6>
                    })
                } */}
                <h5> String (3)substr() method</h5>
                {/* {
                    arraydata.substr(7,13).map((row,index)=>{
                        return <h6 key={index}> ID {row.id} First Name {row.first_name} LastName {row.last_name}</h6>
                    })
                } */}
                   <h5> String (4)substr() method</h5>
                {/* {
                    arraydata.substr(7,13).map((row,index)=>{
                        return <h6 key={index}> ID {row.id} First Name {row.first_name} LastName {row.last_name}</h6>
                    })
                } */}
                     <h5>charAt(position) : { text.charAt(4)} and charCodeAt(position) : {text.charCodeAt(5)}</h5>
              
            

            </div>
        )
    }
}

export default JavascriptExample
