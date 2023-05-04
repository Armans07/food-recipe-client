import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
             <div className='my-5 text-center'>
            <img style={{height:"400px"}} src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png" alt="" />
            <br />
            <Button variant="success "><Link className='text-decoration-none text-white' to='/'>Back To Home</Link></Button>
        </div>
        </div>
    );
};

export default ErrorPage;