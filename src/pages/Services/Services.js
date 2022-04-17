import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../home/Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useServices();
    return (
        <div id='services' className='container my-5'>
            <h2 className='text-center mb-4'>My Services: {services.length}</h2>
            <div className="services row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service 
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;