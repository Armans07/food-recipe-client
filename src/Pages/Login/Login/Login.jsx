import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import { FaGithub, FaGithubAlt, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <Container>
                <Navbar></Navbar>
                <h3 className='text-center fw-semibold'>Please Login</h3>
                <Form className='mx-auto w-25'>
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
                        <Button className='my-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
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