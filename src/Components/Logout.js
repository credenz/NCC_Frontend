import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './css/logout.css';
import { logout } from '../utils/index';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleYes = () => {
        // logout();
      history.push('/Result');
  }
    return (
    <div>
        <span onClick={handleShow} className="logout">Logout</span>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Log Out</Modal.Title>
                </Modal.Header>

                <Modal.Body>Are you sure you want to Logout ?</Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={handleYes}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
        </Modal>
    </div>
      );
}
 
export default Logout;