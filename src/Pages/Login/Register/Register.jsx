import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister = event => {
        event.preventDefault();
        setError('')
        setSuccess('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value
        const password = form.password.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase')
        }
        if (password.length < 6) {
            setError('Password have been must six characters')
        }

        console.log(name, photo, password, email)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateUserProfile(createdUser, name, photo);
                console.log(createdUser)
                setError('')
                setSuccess('Its Done')
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <Container>
            <Navbar></Navbar>
            <h3 className='text-center fw-semibold'>Please Register</h3>

            <Form onSubmit={handleRegister} className='mx-auto w-25'>
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
                <Button variant="success" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <br />
                <Form.Text className="text-secondary">
                    Already  Have an Account? <Link to='/login'>Login</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success">
                    {success}
                </Form.Text>

            </Form>

            <Footer></Footer>
        </Container>
    );
};

export default Register;