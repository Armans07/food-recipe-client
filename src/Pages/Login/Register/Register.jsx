import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
       <Container>
         <Navbar></Navbar>
                <h3 className='text-center fw-semibold'>Please Register</h3>
            
               <Form className='mx-auto w-25'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" required />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo Url" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name='a' label="Accept and terms Conditations" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                       Register
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                      Already  Have an Account? <Link to='/login'>Login</Link>
                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
             
                <Footer></Footer>
       </Container>
    );
};

export default Register;