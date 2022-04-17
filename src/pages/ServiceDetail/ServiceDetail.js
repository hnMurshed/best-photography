import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ServiceDetail = () => {
    const [services, setServices] = useServices();

    const {serviceId} = useParams();
    return (
        <div>
            <p>Services: {services.length}</p>
        </div>
    );
};

export default ServiceDetail;