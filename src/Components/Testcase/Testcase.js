import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Testcase.css";
import TestcaseCard from "./TestcaseCard";

const Testcase = (props) => {

  const resultData = props.location.state;

  const List1 = [1, 2, 3].map((num) => <TestcaseCard val={num} status={[resultData.test_case_status[0], resultData.test_case_status[1], resultData.test_case_status[2]]}/>);
  const List2 = [4, 5, 6].map((num) => <TestcaseCard val={num} status={[resultData.test_case_status[3], resultData.test_case_status[4], resultData.test_case_status[2]]}/>);

  return (
    <Container fluid>
      <Row>
        <Col lg={8}>
          <Row className="justify-content-center">{List1}</Row>
          <Row className="justify-content-center">{List2}</Row>
          <Row >
            <Col className="scoreandstatus">Your score : {resultData.submission_score}</Col>
            <Col className="scoreandstatus">Status : {resultData.status}</Col>
          </Row>
        </Col>
        <Col lg={4}>
          <Row className="justify-content-center">
            <Form style={{ width: "70%"}}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="console-label">Console</Form.Label>
          <Form.Control as="textarea" rows={15} className="consoles" readOnly value={ resultData.status + "\n" + resultData.console_out } />
        </Form.Group>
        </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Testcase;
