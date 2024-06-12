import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "dob": "",
            "bloodgroup": "",
            "mobile": "",
            "address": "",
            "username": "",
            "password": "",
            "pincode": "",
            "district": "",
            "place": "",
            "email": "",
            "username": "",
            "password": ""
        }


    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        if (data.password == data.confirmpassword) {
            alert("PASSWORD AND CONFIRM PASSWORD MATCHES")
        }
        else {
            alert("PASSWORD AND CONFIRM PASSWORD DOESNT MATCH")
        }
        console.log(data)
        axios.post("http://localhost:8082/add", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("SUCCESSFULLY SIGNED IN")
                }
                else {
                    alert("error")

                }
            }
        )
    }
    return (
        <div className="container">
                <div className="row">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row"> 
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">NAME</label>
                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
            </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <label htmlFor="" className="form-label">DOB</label>
                    <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <label htmlFor="" className="form-label">BLOOD GROUP</label>
                    <input type="text" className="form-control" name='bloodgroup' value={data.bloodgroup} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <label htmlFor="" className="form-label">MOBILE</label>
                    <input type="number" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">ADDRESS</label>
                    <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler} /></div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <label htmlFor="" className="form-label">PINCODE</label>
                    <input type="number" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler} /><br />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <label htmlFor="" className="form-label">DISTRICT</label>
                    <select name='districts' value={data.district} onChange={inputHandler} >
                        <option value='Thiruvananthapuram'>THIRUVANANTHAPURAM</option>
                        <option value='Thiruvananthapuram'>KOLLAM</option>
                        <option value='Thiruvananthapuram'>KOTTAYAM</option>
                        <option value='Thiruvananthapuram'>PATHANAMTHITTA</option>
                        <option value='Thiruvananthapuram'>ALAPPUZHA</option>
                        <option value='Thiruvananthapuram'>IDUKKI</option>
                        <option value='Thiruvananthapuram'>ERNAMKULAM</option>
                        <option value='Thiruvananthapuram'>THRISSUR</option>
                        <option value='Thiruvananthapuram'>PALAKKAD</option>
                        <option value='Thiruvananthapuram'>MALAPPURAM</option>
                        <option value='Thiruvananthapuram'>KOZHIKODE</option>
                        <option value='Thiruvananthapuram'>KANNUR</option>
                        <option value='Thiruvananthapuram'>WAYANAD</option>
                        <option value='Thiruvananthapuram'>KASARGODE</option>
                    </select>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <label htmlFor="" className="form-label">PLACE</label>
                    <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler} /></div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <label htmlFor="" className="form-label">EMAIL</label>
                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} /></div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">USER NAME</label>
                    <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler} /></div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">PASSWORD</label>
                    <input type="paassword" className="form-control" name='password' value={data.password} onChange={inputHandler} /></div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                    <input type="paassword" className="form-control" name='confirmpassword' value={data.confirmpassword} onChange={inputHandler} />
                </div>
                <div class="card" >
  <div class="card-body">
   
    <Link to="/" class="card-link" onClick={readValue}>SIGN UP</Link>
    <Link to="/AddUser" class="card-link">LOGIN</Link>
  </div>
</div>
        </div>
</div>
</div>
</div>





    )

}

export default SignUp