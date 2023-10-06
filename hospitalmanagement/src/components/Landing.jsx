import { useState, useContext } from 'react';
import Login from './Login';
import MessageModal from './MessageModal';
import SignUp from './SignUp';
import { MyContext } from '../Context';
import Navbar from 'react-bootstrap/Navbar';
import './Landing.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Landing = () => {

    const [show, setShow] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState([]);
    const [activeKey, setActiveKey] = useState("dashboard");
    const { user, setUser } = useContext(MyContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleMessageClose = () => setShowMessage(false);
    const handleChange = (key) => {
        setActiveKey(key);
    };


    return (
        <>
            {!user && (
                <div className="maincontainer">
                    <Login handleShow={handleShow} setMessage={setMessage} setShowMessage={setShowMessage} />
                    <SignUp show={show} handleClose={handleClose} setMessage={setMessage} setShowMessage={setShowMessage} />
                    <MessageModal showMessage={showMessage} message={message} handleMessageClose={handleMessageClose} />
                </div>
            )}
            {user && user.roles[0] === "ROLE_ADMIN" && (
                <div className="maincontainer">
                    <Navbar className="bg-body-tertiary p-2" data-bs-theme="dark" style={{ width: "17%" }}>
                        <Nav className="flex-column" activeKey={activeKey} onSelect={handleChange}>
                            <Nav.Link eventKey="1">Dashboard</Nav.Link>
                            <NavDropdown title="Patient Management">
                                <NavDropdown.Item eventKey="2.1">Patient Registration</NavDropdown.Item>
                                <NavDropdown.Item eventKey="2.2">Patient Records</NavDropdown.Item>
                                <NavDropdown.Item eventKey="2.3">Admissions & Discharges</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Appointment Management">
                                <NavDropdown.Item eventKey="3.1">Appointment Scheduling</NavDropdown.Item>
                                <NavDropdown.Item eventKey="3.2">Calender View</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Staff Management">
                                <NavDropdown.Item eventKey="4.1">User Administration</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Roles and Permission</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Inventory Management">
                                <NavDropdown.Item eventKey="5.1">Appointment Scheduling</NavDropdown.Item>
                                <NavDropdown.Item eventKey="5.2">Calender View</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Billing & Invoices">
                                <NavDropdown.Item eventKey="6.1">Generate Invoices</NavDropdown.Item>
                                <NavDropdown.Item eventKey="6.2">Payment Processing</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Reports & Analytics">
                                <NavDropdown.Item eventKey="7.1">Generate Reports</NavDropdown.Item>
                                <NavDropdown.Item eventKey="7.2">Data Visualization</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Security & Access Control">
                                <NavDropdown.Item eventKey="8.1">User Authentication</NavDropdown.Item>
                                <NavDropdown.Item eventKey="8.2">Audit Trails</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Communication">
                                <NavDropdown.Item eventKey="9.1">Messaging</NavDropdown.Item>
                                <NavDropdown.Item eventKey="9.2">Notifications</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar>
                    <Navbar className="bg-body-tertiary" data-bs-theme="dark" style={{ width: "17%", height: "100vh" }}>
                    </Navbar>
                </div>
            )}
            {user && user.roles[0] === "ROLE_DOCTOR" && (
                <div className="maincontainer">
                    <h1>Doctor</h1>
                </div>
            )}
            {user && user.roles[0] === "ROLE_PATIENT" && (
                <div className="maincontainer">
                    <h1>Patient</h1>
                </div>
            )}
        </>
    );
}

export default Landing;