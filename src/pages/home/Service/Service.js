import React from 'react';

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt={name} />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                    <button className='btn btn-primary w-100'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;