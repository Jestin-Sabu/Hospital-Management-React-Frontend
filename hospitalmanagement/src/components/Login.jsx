import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import './Login.css';

const Login = (props) => {

    const [loginValidated, setLoginValidated] = useState(false);

    const handleLoginSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

            const username = form.elements.inputLoginUserName.value;
            const password = form.elements.inputLoginPassword.value;
        }

        setLoginValidated(true);
    };

    return (
        <Container fluid>
            <Row className="no-gutter">
                <Container className="col-md-6 d-none d-md-flex bg-image"></Container>
                <Container className="col-md-6 bg-light">
                    <Container className="login d-flex align-items-center py-5">
                        <Container>
                            <Row>
                                <Container className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-4 text-center">Login Page</h3>
                                    <p className="text-muted mb-4 text-center">Login to hospital management application</p>
                                    <Form noValidate validated={loginValidated} onSubmit={handleLoginSubmit}>
                                        <Form.Control id="inputLoginUserName" type="text" placeholder="Username" required className="rounded-pill border-2 shadow-sm px-4 mb-3" />
                                        <Form.Control id="inputLoginPassword" type="password" placeholder="Password" required className="rounded-pill border-2 shadow-sm px-4 mb-3 text-primary" />
                                        <Form.Check id="customCheck1" type="switch" label="Remember Password" defaultChecked />
                                        <Button type="submit" className="w-100 mt-2 btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</Button>
                                        <Stack direction="horizontal" gap={1} className="d-flex justify-content-center"><div className="p-4">Don't have an account?</div><Button variant="outline-danger" onClick={props.handleShow}>Create Account</Button></Stack>
                                    </Form>
                                </Container>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </Row>
        </Container>
    );
}

export default Login;