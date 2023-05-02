import React, { useEffect, useState } from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Card, Col, Container, Row } from 'react-bootstrap';
import RightSide from '../Pages/Shared/rightSide/RightSide';
import Chef from './chef/Chef';

const Main = () => {

    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Chef></Chef>
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