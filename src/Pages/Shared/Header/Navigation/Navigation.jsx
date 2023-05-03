import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../../../assets/food_recipe_logo-removebg-preview.png";
const Navigation = () => {
  return (
    <div>
      <Container>
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#home">
            <img  className="text-light" style={{ height: "50px" }} src={logo} alt="" />
            <span className="fw-bold text-light">FOOD RECIPE</span>
          </Navbar.Brand>
          <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto d-flex gap-2 ">
                <Link className="text-decoration-none text-light" to={"/"}>
                  Home
                </Link>
                <Link to='blog' className="text-decoration-none text-light">Blog</Link>
                <Link className="text-decoration-none text-light">User</Link>
              </Nav>
              <Nav className="d-flex gap-2">
                <FaUserCircle className="text-light" style={{ fontSize: "2.5rem" }}></FaUserCircle>
                <Link to="/login">
                  <Button variant="success">Login</Button>
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
