import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServices from '../../hooks/useServices';

const ServiceDetail = () => {
    const [services, setServices] = useServices();
    const { serviceId } = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const [user, loading, error] = useAuthState(auth);

    const getName = e => {
        setName(e.target.value);
    }
    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getAddress = e => {
        setAddress(e.target.value);
    }
    const getPhone = e => {
        setPhone(e.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div className="form-container border border-2 my-5">
            <h3 className='text-center mb-4'>Your Details</h3>
            <p>Please submit your details to confirm your booking</p>
            <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label className='' htmlFor="name">Name</label>
                    <input onBlur={getName} className='form-control' type="text" name="name" id="name" placeholder='Enter your name' required />
                </div>
                <div className="form-group">
                    <label className='' htmlFor="email">Email</label>
                    <input onBlur={getEmail} className='form-control' type="email" value={user && user.email} name="email" id="email" placeholder='Enter your email' required readOnly />
                </div>
                <div className="form-group">
                    <label className='' htmlFor="address">Address</label>
                    <input onBlur={getAddress} className='form-control' type="text" name="address" id="address" placeholder='Your address' required />
                </div>
                <div className="form-group">
                    <label className='' htmlFor="mobile">Mobile</label>
                    <input onBlur={getPhone} className='form-control' type="text" name="mobile" id="mobile" placeholder='Your Phone' required />
                </div>
                <div className="error">
                    <p className='text-danger'>{error && error.message}</p>
                </div>
                <input className='submit-btn btn btn-primary text-white mt-4 w-100 border-0 rounded-3 py-2' type="submit" value="Confirm Booking" data-bs-toggle="modal" data-bs-target="#exampleModal" />

                {/* Bootstrap model */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Great, {user && user.displayName}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>You have successfully submitted your details and confirm your booking. Thank you!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ServiceDetail;