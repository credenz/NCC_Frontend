import './css/coding.css';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-spellcheck";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/ext-beautify";
import {Dropdown,Form} from 'react-bootstrap';


const Coding = () => {
    
    return ( 
        
        

        <div className="container-fluid">
            <div className="row mx-auto">
                <div className="col-12 col-md-6">
                    <div className="container left-side">
                        <div className="score-div d-flex mb-3">
                            <table className="score">
                                <tr>
                                    <td>Score : {400} </td>
                                </tr>
                            </table>
                            <Dropdown className="que-no d-flex ml-auto">
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Questions
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Q.1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Q.2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Q.3</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Q.4</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">Q.5</Dropdown.Item>
                                    <Dropdown.Item href="#/action-6">Q.6</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        
                        <div className="card que-card">
                            <div className="card-header text-center align-items-center">
                                <h5>Problem Statement</h5>
                            </div>
                            <div className="card-body que-body" id="scroll">
                                
                                <div className="question mb-5">
                                    Ashley loves primes!
                                    She gives you T testcases.<br />
                                    In each testcase you are given two space separated integers L and R. You have to print the number of
                                    primes in range L to R(both included).<br />
                                    Ashley loves primes!<br />
                                    She gives you T testcases.<br />
                                    In each testcase you are given two space separated integers L and R. You have to print the number of
                                    primes in range L to R(both included).<br />
                                    Ashley loves primes!<br />
                                    She gives you T testcases.<br />
                                    In each testcase you are given two space separated integers L and R. You have to print the number of
                                    primes in range L to R(both included).<br />
                                </div>
                                <div className="mb-3">
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
                                </div>
                            </div>
                        </div>
                        
                        <div className="check d-flex align-items-left mt-4 mb-4">
                            <label><input type="checkbox" for="input" name="input" /><span className="ml-2">Custom Input</span></label>
                        </div>

                        <span className="cust-inp" style={{color:"white"}}>
                            <h6>Custom Input</h6>
                        </span>

                        <div className="custom-input mt-3">
                        <textarea className="card custom-area"></textarea>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-6">
                <div className="wrapper-container right-side ml-5">
                    <div className="lang d-flex mb-2"> 
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Select Language
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">C</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">C++</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Python</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Form className="d-flex ml-auto">
                                <Form.Group className="file">
                                    <Form.File id="exampleFormControlFile1"/>
                                </Form.Group>
                            </Form>
                    </div>
                    
                    <div className="code-editor">
                        <AceEditor mode="python" theme="monokai" className="editor" placeholder="Type your code here"></AceEditor>
                    </div>

                    <div className="buttons d-flex mt-4 mb-4">
                        <button className="btn btn-info ml-5">Clear</button>
                        <button className="btn btn-info ml-5">Load Buffer</button>
                        <button className="btn btn-info ml-5">Run Code</button>
                        <button className="btn btn-info ml-5">Submit</button>
                    </div>
                    
                    <span className="console-txt" style={{color:"white"}}>
                            <h6>Console</h6>
                    </span>

                    <div className="console" style={{color:"white"}}>
                        <textarea className="card custom-area" readOnly id="scroll-con">Warning !</textarea>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>

        
     );
     
}
 
export default Coding;