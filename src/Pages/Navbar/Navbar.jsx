import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const {user}=useContext(AuthContext)
    return (
      
<div>
<nav className='d-flex flex-grow-1 my-2 px-2'>
    <Link className='flex-grow-1 fw-bold text-decoration-none text-dark' to='/'><h4 >FOOD RECIPE</h4></Link>
    <div className='d-flex flex-grow-1 gap-3 '>
        <Link className='text-decoration-none' to='/'> Home</Link>
        <Link className='text-decoration-none' to='/blog'> Blog</Link>
        {user && <Link className='text-decoration-none' to='/user'> {user.displaName}</Link>}
    </div>
    <div className='d-flex gap-1'>
    <FaUserCircle  style={{fontSize:'2rem'}}></FaUserCircle>
    { user? <Link to='/login'><button className='btn btn-success
    '>Log Out</button></Link>:
      <Link to='/login'><button className='btn btn-success
    '>Login</button></Link>}
    </div>
</nav>
</div>

    
    );
};

export default Navbar;