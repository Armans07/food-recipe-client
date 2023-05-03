import React from 'react';
import Navbar from '../../../Pages/Navbar/Navbar';
import Footer from '../../../Pages/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const ChefsDetails = () => {
    return (
        <div>
            <Container>
                <Navbar></Navbar>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default ChefsDetails;