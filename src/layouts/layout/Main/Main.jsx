import React from 'react';
import Navbar from '../../../Pages/Navbar/Navbar';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../../Pages/Footer/Footer';
import Chefs from '../../../Pages/Chefs/Chefs';
import Banner from '../../../Pages/Home/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Container>
                <Navbar></Navbar>
                <Banner></Banner>
                <Row>
                    <Col lg={12}>
                        <Chefs></Chefs>
                        <Outlet></Outlet>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Main;