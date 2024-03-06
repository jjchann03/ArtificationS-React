import './profile.css'
import { Routes, Route, Link} from 'react-router-dom';
import ProfileInfo from './Components/ProfileInfo/ProfileInfo';
import Address from './Components/Addresses/Address';
import { useState } from 'react';

export default function Profile(){
    const [selected, setSelected] = useState('Basic Info'); // Default selected link

    const handleSelect = async (linkName) => {
        await setSelected(linkName);
        console.log(selected);
    };

    const logout=()=>{
        sessionStorage.clear();
        window.location.href='/';
    }
    

    return(
        <div className='profile-body'>
            <div className='side-bar'>
                <Link to={`/profile/${sessionStorage.getItem('userId')}/info`} className='profile-sidebar-link'>
                    <div className={`profile-sidebar-display ${selected === 'Basic Info' ? 'profile-sidebar-active-link' : ''}`} onClick={() => handleSelect('Basic Info')}>Basic Info</div>
                </Link> 
                <Link to={`/profile/${sessionStorage.getItem('userId')}/addresses`} className='profile-sidebar-link'>
                    <div className={`profile-sidebar-display ${selected === 'Address' ? 'profile-sidebar-active-link' : ''}`} onClick={() => handleSelect('Address')}>Address</div>
                </Link> 
                <Link to={`/profile/${sessionStorage.getItem('userId')}/addresses`} className='profile-sidebar-link'>
                    <div className={`profile-sidebar-display ${selected === 'Orders' ? 'profile-sidebar-active-link' : ''}`} onClick={() => handleSelect('Orders')}>Orders</div>
                </Link> 
                <Link to={`/profile/${sessionStorage.getItem('userId')}/addresses`} className='profile-sidebar-link' >
                    <div className={`profile-sidebar-display ${selected === 'Password' ? 'profile-sidebar-active-link' : ''}`} onClick={() => handleSelect('Password')}>Password Protection</div>
                </Link> 
                <Link to={`/profile/${sessionStorage.getItem('userId')}/addresses`} className='profile-sidebar-link'>
                    <div className={`profile-sidebar-display ${selected === 'Help' ? 'profile-sidebar-active-link' : ''}`} onClick={() => handleSelect('Help')}>Privacy & Help</div>
                </Link>  

                <div className='sidebar-end'>
                    <div className='profile-sidebar-display' onClick={()=>{logout()}}>Logout</div>
                </div>
                
            </div>

            <div className='shop-body'>
                <Routes>
                    <Route path='/:userid/info' element={<ProfileInfo/>}/>
                    <Route path='/:userid/addresses' element={<Address/>}/>
                </Routes>
            </div>
            {/* <button onClick={logout}>Logout</button> */}
        </div>
    )
}