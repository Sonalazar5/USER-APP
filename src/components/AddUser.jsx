import React, { useState } from 'react';

import {  Link } from 'react-router-dom';
import Navbar from './Navbar';







const AddUser = () => {
    const[data,setData]=useState(
        {
            "username":"",
            "password":""
        }
    
        
    )
    const inputHandler= (event)=>{
        setData({...data,[event.target.name]: event.target.value})
    }

    const readValue=()=>{
        console.log(data)
       
    }
    return (
        <div>
            <Navbar/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card" >
                                    <img src="https://images.unsplash.com/photo-1519336305162-4b6ed6b6fc83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwJTIwdXNlcnxlbnwwfHwwfHx8MA%3D%3D" height="250px" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">USER APP</h5>
                                           
                                        </div>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <label htmlFor="" className="form-label">USERNAME</label>
                                                    <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <label htmlFor="" className="form-label">PASSWORD</label>
                                                    <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <Link to="/" class="card-link" onClick={readValue}>LOGIN</Link>
                                            <Link to="/SignUp" class="card-link" onClick={readValue}>SIGN-UP</Link>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            );
}

            export default AddUser;
