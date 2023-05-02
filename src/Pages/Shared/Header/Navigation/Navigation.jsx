import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../../../assets/food_recipe_logo-removebg-preview.png";
const Navigation = () => {
  return (
    <div>
      <Container>
        <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#home">
            <img  style={{ height: "50px" }} src={logo} alt="" />
            <span className="fw-bold">FOOD RECIPE</span>
          </Navbar.Brand>
          <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto d-flex gap-2 ">
                <Link className="text-decoration-none" to={"/"}>
                  Home
                </Link>
                <Link className="text-decoration-none">Blog</Link>
                <Link className="text-decoration-none">User</Link>
              </Nav>
              <Nav className="d-flex gap-2">
                <FaUserCircle style={{ fontSize: "2.5rem" }}></FaUserCircle>
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navigation;
