import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Hospital Management</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;