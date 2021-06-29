import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './css/subcode.css';

const Code = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <div>
        <button onClick={handleShow} className="btn btn-info view">View</button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <h4 className="clip"><i class="fa fa-files-o" aria-hidden="true"></i></h4>
                    <Modal.Title className="name">Submission {1}</Modal.Title>
                </Modal.Header>
                   
                <Modal.Body className="viewcode">
                    {props.code}
                </Modal.Body>

        </Modal>
    </div>
      );
}
 
export default Code;