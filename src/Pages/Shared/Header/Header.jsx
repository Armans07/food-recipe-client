import React from "react";
import Navigation from "./Navigation/Navigation";
import Banner from "./Carousel/Banner";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Container>
      <Navigation></Navigation>
      <Banner></Banner>
      </Container>
     
    </div>
  );
};

export default Header;
