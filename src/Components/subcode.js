import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import copy from "copy-to-clipboard";
import AceEditor from "react-ace";
import "brace/mode/c_cpp";
import "brace/mode/python";
import "brace/ext/modelist";
import "brace/theme/monokai";
import './css/subcode.css';

const Code = (props) => {
  let counter = 0;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const copyToClipboard = () => {
    copy(props.code);
    document.querySelector(".clip").style.color="#53e3a6";
  }

    return (
    <div>
        <button onClick={handleShow} className="btn btn-info view">View</button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <h3 className="clip" onClick={copyToClipboard}><i class="fa fa-files-o" aria-hidden="true"></i></h3>
                    <Modal.Title className="name">Submission {counter}</Modal.Title>
                </Modal.Header>
                   
                <Modal.Body className="viewcode">
                  
                    <AceEditor
                      mode="text"
                      theme="monokai"
                      className="code"
                      value={props.code}
                      setOptions={{
                          showPrintMargin: false,
                          showGutter: true, 
                          showLineNumbers: true,
                          tabSize: 4,
                          readOnly: true,
                          wrap: true,
                        }}
                    />

                </Modal.Body>

        </Modal>
    </div>
      );
}
 
export default Code;