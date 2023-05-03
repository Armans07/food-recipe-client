import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      
<div>
<nav className='d-flex flex-grow-1 my-2 px-2'>
    <Link className='flex-grow-1 fw-bold text-decoration-none text-dark' to='/'><h4 >FOOD RECIPE</h4></Link>
    <div className='d-flex flex-grow-1 gap-3 '>
        <Link className='text-decoration-none' to='/'> Home</Link>
        <Link className='text-decoration-none' to='/blog'> Blog</Link>
        <Link className='text-decoration-none' to='/user'> User</Link>
    </div>
    <div className='d-flex gap-1'>
    <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
    <Link to='/login'><button className='btn btn-success
    '>Login</button></Link>
    </div>
</nav>
</div>

    
    );
};

export default Navbar;