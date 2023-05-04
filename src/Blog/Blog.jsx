import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Blog = () => {
    return (
       <Container>
        <Navbar></Navbar>
        <h2 className='text-center'>Blog Side</h2>
        <Footer></Footer>
       </Container>
    );
};

export default Blog;