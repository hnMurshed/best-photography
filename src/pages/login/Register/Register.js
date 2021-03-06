import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialButtons from '../SocialButtons/SocialButtons';
// import './Register.css';

const Register = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [passwordMatched, setPasswordMatched] = useState(true);

    // useRef to get input values
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating] = useUpdateProfile(auth);

    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user])

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>{error.message}</p>
        </div>
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setPasswordMatched(false);
            // errorElement = <p className='text-danger'>Password didn't match, pls try again!</p>
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
    }
    return (
        <div className="form-container border border-2 my-5">
            <h3 className='text-center mb-4'>Please Register!!</h3>
            <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label className='' htmlFor="user-name">Name</label>
                    <input ref={nameRef} className='form-control' type="text" name="name" id="user-name" placeholder='Enter your name' required />
                </div>
                <div className="form-group">
                    <label className='' htmlFor="register-email">Email</label>
                    <input ref={emailRef} className='form-control' type="email" name="email" id="register-email" placeholder='Enter your email' required />
                </div>
                <div className="form-group">
                    <label className='' htmlFor="new-password">Set Password</label>
                    <input ref={passwordRef} className={`form-control ${passwordMatched ? '' : 'border-danger'}`} type="password" name="password" id="new-password" placeholder='Set password' required />
                </div>
                <div className="form-group">
                    <label className='' htmlFor="conf-password">Confirm Password</label>
                    <input ref={confirmPasswordRef} className={`form-control ${passwordMatched ? '' : 'border-danger'}`} type="password" name="confirmPassword" id="conf-password" placeholder='Confirm password' required />
                </div>
                {
                    passwordMatched ? '' : <p className='text-danger'>Password didn't match, pls try again!</p>
                }
                <div className="form-group">
                    <input onClick={ () => setIsChecked(!isChecked)}  className={`me-2 ${isChecked ? 'text-primary' : ''}`} type="checkbox" name="terms" id="terms" />
                    <label className={isChecked ? 'text-primary' : ''} htmlFor="terms">Accept Terms and Conditions</label>
                </div>
                <input disabled={!isChecked} style={{cursor: `${isChecked ? 'pointer' : 'not-allowed'}`}} className={`submit-btn btn btn-primary text-white mt-4 w-100 border-0 rounded-3 py-2`} type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-decoration-none'>Please Login</Link></p>
            {errorElement}
            <SocialButtons></SocialButtons>
        </div>
    );
};

export default Register;