import React from 'react';

const NotFound = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center' style={{ height: '500px' }}>
            <div>
                <h2 className='text-center' style={{fontSize: '58px'}}>404</h2>
                <p style={{fontSize: '28px'}}>Sorry, the page is not found</p>
            </div>
        </div>
    );
};

export default NotFound;