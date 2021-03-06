import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css';
import toast, { Toaster } from 'react-hot-toast';
import { Spinner } from 'react-bootstrap';
import SocialButtons from '../SocialButtons/SocialButtons';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])


    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>{error.message}</p>
        </div>
    }

    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast.success('Reset password mail sent. Please check your inbox');
    }

    const handleLoginOnSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-container border border-2 my-5">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h3 className='text-center mb-4'>Please Login!!</h3>
            <form onSubmit={handleLoginOnSubmit}>
                <div className="form-group">
                    <label className='' htmlFor="email">Email</label>
                    <input onBlur={e => setEmail(e.target.value)} className='form-control' type="email" name="email" id="email" placeholder='Enter your email' />
                </div>
                <div className="form-group">
                    <label className='' htmlFor="password">Password</label>
                    <input onBlur={e => setPassword(e.target.value)} className='form-control' type="password" name="password" id="password" placeholder='Enter your password' />
                </div>
                {errorElement}
                <input className='submit-btn btn btn-primary text-white mt-4 w-100 border-0 rounded-3 py-2' type="submit" value="Login" />
            </form>
            <p>Don't have an account? <Link to='/register' className='text-decoration-none'>Please Register</Link></p>
            <p>Forgot password? <span onClick={resetPassword} className='text-decoration-none text-primary' style={{ cursor: 'pointer' }}>Reset Password</span></p>
            <SocialButtons></SocialButtons>
        </div>
    )
};

export default Login;