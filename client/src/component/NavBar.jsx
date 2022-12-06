import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  Container,
  Button,
} from "react-bootstrap";

export default class NavB extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1"><h3>Home</h3></Nav.Link>
                <Nav.Link href="#action2"><h3>Post</h3></Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
          </Container>
        </Navbar>
      </div>
    );
  }
}
