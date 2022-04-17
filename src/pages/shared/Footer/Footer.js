import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-dark text-center py-5'>
            <span className='fs-3 fw-bold text-white'>Best Photography</span>
            <div className='footer-menu my-5'>
                <Link to='about'>About</Link>
                <Link to='contact'>Contact</Link>
                <Link to='terms'>Terms & Conditions</Link>
            </div>
            <div>
                <small className='text-white'>Created by Murshedul</small>
            </div>
        </div>
    );
};

export default Footer;