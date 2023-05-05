import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Button, Image } from 'react-bootstrap';

const Navbar = () => {
    
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (

        <div>
            <nav className='d-flex flex-grow-1 my-2 px-2'>
                <Link className='flex-grow-1 fw-bold text-decoration-none text-dark' to='/'><h4 >FOOD RECIPE</h4></Link>
                <div className='d-flex flex-grow-1 gap-3 '>
                    <NavLink className={({ isActive }) => (isActive ? 'text-success-600 text-decoration-none' : 'text-black text-decoration-none')} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-success-600 text-decoration-none' : 'text-black text-decoration-none')} to='/blog'>Blog</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-success-600 text-decoration-none' : 'text-black text-decoration-none')} to='/about'>About</NavLink>
                   
                </div>
                <div className='d-flex gap-2 mx-auto'>
                    {
                        user && <Image style={{height:'2rem'}} src={user.photoURL} roundedCircle />
                    } 
                   
                    {user ?
                        <Button onClick={handleLogOut} variant='success'>Logout</Button>:
                        <Link to='/login'><button className='btn btn-success'>Login</button></Link>}
                </div>
            </nav>
        </div>


    );
};

export default Navbar;