import './login.css'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [userdata, setUserData] = useState({username:"",password:""});
    const navigate = useNavigate();
    function sendData(){
        axios.post("http://localhost:8080/login_submit",userdata,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
            }).then(response=>{
            if(response.status===200){
                console.log("user Fetched");
                let userId = response.data.msg[0]._id;
                console.log(userId);
                sessionStorage.setItem('userId',userId);
                sessionStorage.setItem('firstTime',1);
                window.location.href='/';
            }else{
                navigate(0);
                console.log("user Not Fetched");
            }
        });
    }

    return(
        <div className='login-container'>
            <div className='background'></div>
            <div className="login-form">
                <h3>Welcome Back!</h3>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" onChange={e=>{setUserData({...userdata,username:e.target.value})}} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" onChange={e=>{setUserData({...userdata,password:e.target.value})}} required/>
                </div>
                <div className="form-group">
                    <button type="button" onClick={sendData}>Login</button>
                </div>
                <div className="form-group link">
                    <span>Don't have an account? <a href="/Signup">Sign up</a></span>
                </div>
            </div>
        </div>
    )
}