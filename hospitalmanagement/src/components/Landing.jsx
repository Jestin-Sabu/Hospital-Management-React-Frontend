import { useState } from 'react';
import LoginSignUpService from '../services/LoginSignUpService';
import Login from './Login';
import MessageModal from './MessageModal';
import SignUp from './SignUp';

const Landing = () => {

    const [show, setShow] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleMessageClose = () => setShowMessage(false);

    const service = new LoginSignUpService();

    return (
        <div className="maincontainer">
            <Login handleShow={handleShow} />
            <SignUp show={show} handleClose={handleClose} setMessage={setMessage} setShowMessage={setShowMessage} />
            <MessageModal showMessage={showMessage} message={message} handleMessageClose={handleMessageClose} />
        </div>
    );
}

export default Landing;