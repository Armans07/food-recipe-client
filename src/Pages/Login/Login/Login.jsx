import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGithubAlt, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import app from '../../../firebase/firebase.config';

const Login = () => {
    const [user,setUser]=useState(null)
    const auth = getAuth(app)
    const provider =new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const loggedUser =result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log('error', error.message)
        })

    }
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Login pa', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
       
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from ,{replace: true})
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div>
            <Container>
                <Navbar></Navbar>
                <h3 className='text-center fw-semibold'>Please Login</h3>
                <Form onSubmit={handleLogin} className='mx-auto w-25'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <div className='text-center'>
                        <Button className='mb-2' variant="success" type="submit">
                            Login
                        </Button>
                        <br />
                        <Form.Text className="text-secondary">
                            Dont'n Have an Account? <Link to='/register'>Register</Link>
                        </Form.Text>
                        <br />
                        <Button onClick={handleGoogleSignIn} className='my-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                        <br />
                        <Button variant="outline-secondary"><FaGithub></FaGithub> Login With GitHub</Button>


                    </div>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Login;