import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import './LoginSignUp.css'
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginSignUpService from '../services/LoginSignUpService';
import User from '../models/User';
import MessageModal from './MessageModal';

const LoginSignUp = () => {

    const [show, setShow] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState([]);
    const [loginValidated, setLoginValidated] = useState(false);
    const [signUpValidated, setSignUpValidated] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleMessageClose = () => setShowMessage(false);

    const service = new LoginSignUpService();

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

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setSignUpValidated(true);
            return;
        }
        setSignUpValidated(false);

        var user = new User(
            form.elements.inputSignUpUserName.value,
            form.elements.inputFirstName.value,
            form.elements.inputLastName.value,
            form.elements.inputAddress.value,
            form.elements.inputPin.value,
            form.elements.inputMobileNumber.value,
            form.elements.inputSignUpEmail.value,
            form.elements.inputSignUpPassword.value
        );

        var response = await service.signUp(user);
        if (response[0] === true) {
            console.log(response[1]);
            setMessage(['Message', response[1].data.message]);
            setShowMessage(true);
        } else {
            setMessage(['Error', response[1].response.data.message]);
            setShowMessage(true);
        }
    };
    return (
        <>
            <div className="maincontainer">
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
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Form noValidate validated={signUpValidated} onSubmit={handleSignUpSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack direction="horizontal" gap={2}>
                            <Form.Control id="inputFirstName" type="text" placeholder="First Name" required className="rounded-pill border-2 shadow px-4 mb-3" />
                            <Form.Control id="inputLastName" type="text" placeholder="Last Name" required className="rounded-pill border-2 shadow px-4 mb-3" />
                        </Stack>
                        <Form.Control id="inputAddress" as="textarea" placeholder="Address" required className="rounded border-2 shadow px-4 mb-3" style={{ resize: 'None' }} />
                        <Stack direction="horizontal" gap={2}>
                            <Form.Control id="inputPin" type="text" placeholder="PIN" required className="rounded-pill border-2 shadow px-4 mb-3" />
                            <Form.Control id="inputMobileNumber" type="text" placeholder="Mobile Number" required className="rounded-pill border-2 shadow px-4 mb-3" />
                        </Stack>
                        <Stack direction="horizontal" gap={2}>
                            <Form.Control id="inputSignUpUserName" type="text" placeholder="Username" required className="rounded-pill border-2 shadow px-4 mb-3" />
                            <Form.Control id="inputSignUpEmail" type="email" placeholder="Email address" required className="rounded-pill border-2 shadow px-4 mb-3" />
                        </Stack>
                        <Form.Control id="inputSignUpPassword" type="password" placeholder="Password" required className="rounded-pill border-2 shadow px-4 mb-3 text-primary" />
                        <Form.Control id="inputSignUpConfirmPassword" type="password" placeholder="Confirm Password" required className="rounded-pill border-2 shadow px-4 mb-3 text-primary" />
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-between">
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <MessageModal showMessage={showMessage} message={message} handleMessageClose={handleMessageClose} />
        </>
    );
}

export default LoginSignUp;