import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightSide from '../Pages/Shared/rightSide/RightSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
      <Row>
        <Col lg={8}>
            <h2>Main Content Coming </h2>
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