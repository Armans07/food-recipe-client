import React, { useEffect, useState } from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import {Col, Container, Row } from 'react-bootstrap';
import RightSide from '../Pages/Shared/rightSide/RightSide';
import Chef from './chef/Chef';
import { Outlet } from 'react-router-dom';

const Main = () => {

    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Chef></Chef>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={4}>
                        <RightSide></RightSide>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;