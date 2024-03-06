import React, { useEffect, useState } from 'react';
import './address.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import { CitySelect, CountrySelect, StateSelect } from 'react-country-state-city';
import 'react-country-state-city/dist/react-country-state-city.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Address() {
    const navigate = useNavigate();
    const [addresses, setAddresses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [countryId, setCountryId] = useState(0);
    const [stateId, setStateId] = useState(0);
    const [addressData, setAddressData] = useState({
        country: '',
        state: '',
        city: '',
        pincode: '',
        area: '',
        landmark: '',
        mob: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressData({ ...addressData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        axios
            .post('http://localhost:8080/add_address', { userId, addressData }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
            })
            .then(async response => {
                if (response.status === 200) {
                    await navigate(0);
                    toast('Address Added Successfully');
                }
            });
    };

    const userId = useParams().userid;

    useEffect(() => {
        axios.post('http://localhost:8080/get_addresses', { userId }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
        })
        .then(async (response) => {
            if (response.status === 200) {
                await setAddresses(response.data.result);
            }
        });       
    }, [addresses, userId]);

    const addAddress = () => {
        setShowForm(true);
    };

    return (
        <>
            <ToastContainer/>
            <div className='profile-addresses-body'>
                <div className='address-container'>
                    {addresses.length === 0 ? (
                        <div className='address-list'>
                            <div className='empty-address'>
                                <h2>There are no addresses to display.</h2>
                                <p>Please add an address.</p>
                            </div>
                        </div>
                    ) : (
                        <div className='address-list'>
                            {addresses.map((arr) => {
                                return (
                                    <div className='address-details-container'>
                                        <h2>{arr.name}</h2>
                                        <p>{arr.mob}</p>
                                        <p>{arr.area},{arr.city}({arr.pincode}),{arr.state},{arr.country}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                <button className='read-more' onClick={addAddress}>
                    <FaPlus /> Add Address
                </button>
            </div>

            {showForm && (
                <div className='address-form'>
                    <h2>Address Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-row'>
                            <div className='form-group'>
                                <label>Name:</label>
                                <input type='text' name='name' value={addressData.name} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group'>
                                <label>Country:</label>
                                <CountrySelect
                                    onChange={(e) => {
                                        setCountryId(e.id);
                                        setAddressData({ ...addressData, country: e.name });
                                    }}
                                    placeHolder='Select Country'
                                />
                            </div>
                            <div className='form-group'>
                                <label>State:</label>
                                <StateSelect
                                    countryid={countryId}
                                    onChange={(e) => {
                                        setStateId(e.id);
                                        setAddressData({ ...addressData, state: e.name });
                                    }}
                                    placeHolder='Select State'
                                />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group'>
                                <label>City:</label>
                                <CitySelect
                                    countryid={countryId}
                                    stateid={stateId}
                                    onChange={(e) => {
                                        console.log(e);
                                        setAddressData({ ...addressData, city: e.name });
                                    }}
                                    placeHolder='Select City'
                                />
                            </div>
                            <div className='form-group'>
                                <label>Pincode:</label>
                                <input type='text' name='pincode' value={addressData.pincode} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group'>
                                <label>House No.:</label>
                                <input type='text' name='area' value={addressData.houseno} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group'>
                                <label>Landmark (Optional):</label>
                                <input type='text' name='landmark' value={addressData.landmark} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group'>
                                <label>Mobile Number:</label>
                                <input type='text' name='mob' value={addressData.mobile} onChange={handleChange} />
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            )}
        </>
    );
}
