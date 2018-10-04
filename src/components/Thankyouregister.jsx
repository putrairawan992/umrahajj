import React, { Component } from "react";
import '../css/style.css';



class Loginuser extends Component {
    render() {
        return (

<div className="container-fluid">
    <div className="header">
      <div className="row">
        <div className="col-md-12">
            <div className="tulisan-umrahajj">
                <p className="thanks">Thank</p>
                  <p className="thanks2">You <img src={require("../images/pesawat.png")}/></p>
                    <p className="thanks3">Register</p>
                      <p className="thanks4">please check your email</p> 
            </div>

                    


            </div>
        </div>
    </div>
</div>

            );
        }
    }


export default Loginuser;