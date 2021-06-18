import './css/coding.css';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-spellcheck";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/ext-beautify";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosInstance from '../axios';


const Coding = () => {

    const { id } = useParams();
    const history = useHistory();

    const [language, setLanguage] = useState('py');
    const [question, setQuestion] = useState([
        {question_desc: 'loading...'},
        {question_desc: 'loading...'},
        {question_desc: 'loading...'},
        {question_desc: 'loading...'},
        {question_desc: 'loading...'},
        {question_desc: 'loading...'}
    ]);
    const [code, setCode] = useState(0);
    let [consoleResponse, setConsoleResponse] = useState({status: "Console", output: ""});
    let [customInput, setCustomInput] = useState("");
    const [userDatas, setUserDatas] = useState(0);
    
    useEffect(() => {
        axiosInstance.get('codingpage/').then((res) => {
            const questions = res.data;
            setQuestion(questions);
            console.log(res.data);
        });
    }, [setQuestion]);

    useEffect(() => {
        axiosInstance.get('userstats/').then((res) => {
            setUserDatas(res.data);
            console.log(userDatas);
        })
    }, [setUserDatas]);

    const handleCodeSubmit = (e) => {
        console.log(code);
        axiosInstance
            .post('codesubmit/',{
                qno: id,
                lang: language,
                code: code
            })
            .then((res) => {
                console.log(res.data);
                setConsoleResponse(res.data.console_out);
                history.push('/testcase', res.data)
            })
    }

    const handleRunCode = (e) => {
        axiosInstance
            .post('coderun/', {
                qno: id,
                code: code,
                lang: language,
                ici: true,
                ci: customInput,
            })
            .then((res) => {
                console.log(res.data);
                setConsoleResponse(res.data);
                console.log(consoleResponse);
            });
    }

    return ( 
           
        <div className="container-fluid">
            <div className="row mx-auto">
                <div className="col-12 col-md-6">
                    <div className="container left-side">
                        <div className="score-div d-flex mb-3">
                            <table className="score">
                                <tr>
                                    <td>Score : {userDatas.totalScore} </td>
                                </tr>
                            </table>
                            {/* <select id="dropdown-basic" class="bg-info ml-auto que-no" value={question} onChange={e => setQuestion(e.target.value)}>
                                    <option class="bg-light opt" value="q1">Q.1</option>
                                    <option class="bg-light opt" value="q2">Q.2</option>
                                    <option class="bg-light opt" value="q3">Q.3</option>
                                    <option class="bg-light opt" value="q4">Q.4</option>
                                    <option class="bg-light opt" value="q5">Q.5</option>
                                    <option class="bg-light opt" value="q6">Q.6</option>
                                    
                                </select> */}
                        </div>
                        
                        <div className="card que-card">
                            <div className="card-header text-center align-items-center">
                                <h5>Problem Statement</h5>
                            </div>
                            <div className="card-body que-body" id="scroll">
                                
                                <div className="question mb-5">
                                    { question[id - 1].question_desc }  
                                </div>
                                {/* <div className="mb-3">
                                    INPUT FORMAT
                                    <br />
                                    First line contains a single integer T, the number of testcases.<br />
                                    Next T lines consists of 2 space separated integers, L and R.<br />
                                </div>
                                <div className="mb-3">
                                    CONSTRAINTS<br />
                                    1 = T = 10^5<br />
                                    1 = L = R = 10^6<br />
                                </div>
                    
                                <div className="mb-3">
                                    OUTPUT FORMAT<br />
                                    For each testcase print a single required integer.<br />
                                </div>
                    
                                <div className="mb-3">
                                    SAMPLE INPUT<br />
                                    1
                                    2 4<br/>
                                </div>
                    
                                <div className="mb-3">
                                    SAMPLE OUTPUT<br />
                                    2<br />
                                </div>
                    
                                <div className="mb-3">
                                    EXPLANATION<br />
                                    Numbers in range [2, 4] are 2, 3, 4. Out of these 2 and 3 are prime numbers so answer is 2.<br />
                                </div> */}
                            </div>
                        </div>
                        
                        <div className="check d-flex align-items-left mt-4 mb-4">
                            <label><input type="checkbox" for="input" name="input" /><span className="ml-2">Custom Input</span></label>
                        </div>

                        <span className="cust-inp" style={{color:"white"}}>
                            <h6>Custom Input</h6>
                        </span>

                        <div className="custom-input mt-3">
                        <textarea className="card custom-area" onChange={ (e) => {setCustomInput(e.target.value)} }></textarea>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-6">
                <div className="wrapper-container right-side ml-3">
                    <div className="lang d-flex"> 
                            
                                <select id="dropdown-basic" class="bg-info" value={language} onChange={e => setLanguage(e.target.value)}>
                                    <option class="bg-light opt" value="c">C</option>
                                    <option class="bg-light opt" value="cpp">C++</option>
                                    <option class="bg-light opt" value="py">Python</option>
                                </select>

                            <Form className="d-flex file-bod ml-auto mr-3">
                                <Form.Group className="file">
                                    <Form.File id="file-input" name="file-input" hidden/>
                                    <label for="file-input" class="inp">Choose File</label>
                                </Form.Group>
                            </Form>
                    </div>
                    
                    <div className="code-editor">
                        <AceEditor mode="python" theme="monokai" 
                         className="editor"  placeholder="Type your code here" showPrintMargin={false}
                         showGutter={true}
                         onChange={(value, stat) => {
                            setCode(value);
                        }}
                         setOptions={{
                            enableSnippets: true,
                            showLineNumbers: true, 
                            tabSize: 4,
                            }}></AceEditor>
                    </div>

                    <Row className="justify-content-between " style={{ marginBottom: "5vh", width: "90%", marginLeft:"1rem", marginTop: "3vh" }}>
                        
                        <Button variant="outline-secondary" className="editor-button run" onClick={ handleRunCode }>Run Code</Button>
                        <Button variant="outline-secondary" className="editor-button " >Load buffer</Button>
                        <Button variant="outline-secondary" className="editor-button submit" onClick={ handleCodeSubmit }>Submit</Button>
              
                </Row>
                    
                    <span className="console-txt" style={{color:"white"}}>
                            <h6>Console</h6>
                    </span>

                    <div className="console" style={{color:"white"}}>
                        <textarea className="card custom-area" readOnly id="scroll-con" value={ consoleResponse.status + "\n" + consoleResponse.output }></textarea>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>

        
     );
     
}
 
export default Coding;