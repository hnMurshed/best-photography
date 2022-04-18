import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css';

const Loading = () => {
    return (
        <div className='loading-container w-100 text-center container'>
            <div className="loading">
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
            </div>
        </div>
    );
};

export default Loading;