import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import copy from "copy-to-clipboard";
import './css/subcode.css';

const Code = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const copyToClipboard = () => {
    copy(props.code);
  }

    return (
    <div>
        <button onClick={handleShow} className="btn btn-info view">View</button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <h3 className="clip" onClick={copyToClipboard}><i class="fa fa-files-o" aria-hidden="true"></i></h3>
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