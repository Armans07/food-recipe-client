import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
                <Container className=' my-5'>
        <h3 className='text-center text-success my-4'><b>Contact Us</b></h3>
            <div className='d-md-flex gap-4 justify-content-center'>
            <div className='card p-5'>
                <h3>Bengali Foods Info</h3>
                <p>Mauris magna sit elementum facilis lacusacphar.</p>
                <h6>Restaurant:</h6>
                <small >Dhaka, bangladesh</small><br />
                 <h6>Phone No:</h6>
                 <small>01865796378</small><br />
                 <h6>Email:</h6>
                 <small>food@grecipe.com</small>
            </div>
            <div className='p-5 card'>
                <h3>Contact Bengali Foods</h3>
                <input className='p-2 me-3' placeholder='Your Name' type="text" />
                <br />
                <input className='p-2 ' placeholder='Your Email' type="email" /> <br />
                <input className='p-2 my-2' type="number" placeholder='Your Phone Number' /> <br />
                <textarea className='p-2' placeholder='Your message' name="" id="" cols="30" rows="3"></textarea>
                <br />
                <Button variant='success'>Submit</Button>
            </div>
            </div>
        </Container>
        </div>
    );
};

export default Contact;