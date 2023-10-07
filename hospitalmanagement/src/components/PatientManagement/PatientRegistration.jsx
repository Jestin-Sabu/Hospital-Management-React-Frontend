import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import User from '../../models/User';
import AuthService from '../../services/AuthService';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';


const PatientRegistration = () => {

    const [signUpValidated, setSignUpValidated] = useState(false);

    const service = new AuthService();

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
            props.setMessage(['Message', response[1].data.message]);
            props.setShowMessage(true);
            props.handleClose();
        } else {
            props.setMessage(['Error', response[1].response.data.message]);
            props.setShowMessage(true);
        }
    };
    return (
        <Container className="mt-3">
            <Card>
                <Card.Header className="bg-dark text-white">Patient Registration</Card.Header>
                <Card.Body>
                    <Form noValidate validated={signUpValidated} onSubmit={handleSignUpSubmit}>
                        <Stack direction="horizontal" gap={2}>
                            <Form.Control id="inputFirstName" type="text" placeholder="First Name" required className="rounded-pill border-2 shadow px-4 mb-3" />
                            <Form.Control id="inputLastName" type="text" placeholder="Last Name" required className="rounded-pill border-2 shadow px-4 mb-3" />
                        </Stack>
                        <Form.Control id="inputAddress" as="textarea" placeholder="Address" required className="rounded border-2 shadow px-4 mb-3" style={{ resize: 'None', height:"100px" }} />
                        <Stack direction="horizontal" gap={2}>
                            <Form.Control id="inputPin" type="text" placeholder="PIN" required className="rounded-pill border-2 shadow px-4 mb-3" />
                            <Form.Control id="inputMobileNumber" type="text" placeholder="Mobile Number" required className="rounded-pill border-2 shadow px-4 mb-3" />
                        </Stack>
                        <Stack direction="horizontal" gap={2}>
                            <Form.Control id="inputSignUpUserName" type="text" placeholder="Username" required className="rounded-pill border-2 shadow px-4 mb-3" />
                            <Form.Control id="inputSignUpEmail" type="email" placeholder="Email address" required className="rounded-pill border-2 shadow px-4 mb-3" />
                        </Stack>
                        <Stack direction="horizontal" gap={2}>
                            <Form.Control id="inputSignUpPassword" type="password" placeholder="Password" required className="rounded-pill border-2 shadow px-4 mb-3 text-primary" />
                            <Form.Control id="inputSignUpConfirmPassword" type="password" placeholder="Confirm Password" required className="rounded-pill border-2 shadow px-4 mb-3 text-primary" />
                        </Stack>
                        <div className="d-flex justify-content-between">
                            <Button variant="secondary" type="reset">Cancel</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default PatientRegistration;