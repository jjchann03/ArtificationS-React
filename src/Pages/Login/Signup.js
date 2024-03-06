import './login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup(){
    const [userdata, setUserData] = useState({username:"",password:""});
    const navigate = useNavigate();
    function sendData(){
        axios.post("http://localhost:8080/signup_submit",userdata,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
            }).then(response=>{
            if(response.status===200){
                console.log("user Fetched");
                let userId = response.data.msg;
                console.log(userId);
                sessionStorage.setItem('userId',userId);
                if(userId!==null){
                    navigate('/');
                }else{
                    console.log("1");
                }
                
            }else{
                console.log(response.data.msg);
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
                <input type="text" id="username" placeholder="Enter your username" required onChange={e=>{setUserData({...userdata,username:e.target.value})}}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required onChange={e=>{setUserData({...userdata,password:e.target.value})}}/>
            </div>
            <div className="form-group">
                <button type="button" onClick={sendData}>Login</button>
            </div>
        </div>
    </div>
    )
}