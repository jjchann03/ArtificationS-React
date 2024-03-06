import './profileinfo.css'
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProfileInfo(){
    const [userData,setUserData] = useState([]);
    const userId = useParams().userid;

    useEffect(()=>{
        axios.post('http://localhost:8080/get_user_info',{userId},{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(response=>{
            if(response.status===200){
                setUserData(response.data.result[0]);
            }
        })
    },[userData,userId])

    return(
        <div className="profile-info-body">
            <div className="profile-header">
                <img src='' alt="Profile" className="profile-image" />
                <h1 className="profile-title">
                    {userData.name}
                </h1>
            </div>
            <table className="profile-table">
                <tbody>
                    <tr>
                        <td className="attribute">Gender</td>
                        <td>{userData.gender}</td>
                    </tr>
                    <tr>
                        <td className="attribute">Date of Birth</td>
                        <td>{userData.dob}</td>
                    </tr>
                    <tr>
                        <td className="attribute">Location</td>
                        <td>{userData.country}</td>
                    </tr>
                    <tr>
                        <td className="attribute">Email</td>
                        <td>{userData.email}</td>
                    </tr>
                    {/* Add more rows for additional attributes */}
                </tbody>
            </table>
            <button className="edit-button">Edit Profile</button>
        </div>
    )
}