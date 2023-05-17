import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorStatus = () => {
    const mistake = useRouteError()
    console.log(mistake)
    return (
        <div>
            <h1 className='text-5xl'>404</h1>
            <p className='text-3xl'>
                <i>{mistake.statusText || mistake.message}</i>
            </p>
        </div>
    );
};

export default ErrorStatus;