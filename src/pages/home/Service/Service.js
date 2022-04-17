import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const navigate = useNavigate();
    const {name, img, price, description, id} = service;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <span className='fs-3'>${price}</span>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <button onClick={ () => navigate(`/services/${id}`)} className='btn btn-primary w-100'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;