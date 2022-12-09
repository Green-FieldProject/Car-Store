import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import axios from "axios";
import "../index.css";

export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const user = await axios.post("http://localhost:4000/api/users/login", {
        email,
        password,
      });

      if (user) {
        navigate("/");
        localStorage.setItem("token", user.data.token);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }

  return (
    <div className="Login">
<<<<<<< HEAD
      <Container >
=======
      <Container>
>>>>>>> b34e1f7 (up)
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h4>اشري و عليك الامان</h4>
                  <h6 className=" mb-5">
                    Please enter your login and password!
                  </h6>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="success "
                          type="submit"
                          disabled={!validateForm()}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p>
                        Don't have an account?{" "}
                        <a
                          href="http://localhost:3000/register"
                          className="text-success  fw-bold"
                        >
                          register
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
