import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './css/logout.css';

const Logout = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
    <div>
        <span onClick={handleShow} className="logout">Logout</span>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Log Out</Modal.Title>
                </Modal.Header>

                <Modal.Body>Are you sure you want to Logout ?</Modal.Body>

                <Modal.Footer>
                    <Button variant="success">
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