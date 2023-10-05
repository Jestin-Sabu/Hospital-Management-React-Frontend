import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import './App.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'


function App() {

    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLoginSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
                    <Container>
                        <Navbar.Brand href="#home">Hospital Management</Navbar.Brand>
                    </Container>
                </Navbar>
                <div className="maincontainer">
                    <Container fluid>
                        <Row className="no-gutter">
                            <Container className="col-md-6 d-none d-md-flex bg-image"></Container>
                            <Container className="col-md-6 bg-light">
                                <Container className="login d-flex align-items-center py-5">
                                    <Container>
                                        <Row>
                                            <Container class="col-lg-10 col-xl-7 mx-auto">
                                                <h3 class="display-4 text-center">Login Page</h3>
                                                <p class="text-muted mb-4 text-center">Login to hospital management application</p>
                                                <Form noValidate validated={validated} onSubmit={handleLoginSubmit}>
                                                    <Form.Control id="inputEmail" type="email" placeholder="Email address" required className="rounded-pill border-0 shadow-sm px-4 mb-3" />
                                                    <Form.Control id="inputPassword" type="password" placeholder="Password" required className="rounded-pill border-0 shadow-sm px-4 mb-3 text-primary" />
                                                    <Form.Check id="customCheck1" type="switch" label="Remember Password" checked />
                                                    <Button type="submit" className="w-100 mt-2 btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</Button>
                                                    <Stack direction="horizontal" gap={1} className="d-flex justify-content-center"><div className="p-4">Don't have an account?</div><Button variant="outline-danger" onClick={handleShow}>Create Account</Button></Stack>
                                                </Form>
                                            </Container>
                                        </Row>
                                    </Container>
                                </Container>
                            </Container>
                        </Row>
                    </Container>
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Register Form
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default App;
