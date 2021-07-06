import './css/coding.css';
import AceEditor from 'react-ace';
/*import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-spellcheck";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/ext-beautify";*/
import "brace/mode/c_cpp";
import "brace/mode/python";
import "brace/ext/modelist";
import "brace/theme/monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";
import "ace-builds/src-noconflict/ext-spellcheck";
import "ace-builds/src-noconflict/ext-searchbox";
import {Form} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router';
import axiosInstance from '../axios';


const Coding = () => {
    const history = useHistory();
    const { id } = useParams();
    const [language, setLanguage] = useState('py');
    const [question, setQuestion] = useState(1);
    const [quesData, setQuesData] = useState([{
        question_desc: "Loading...",
        pk: 1
    }]);
    const [userData, setUserData] = useState({
        totalScore: 'Loading...'
    })

    useEffect(() => {
        axiosInstance.get('userstats/').then((res) => {
            setUserData(res.data);
            console.log(res.data);
        });
    }, [setUserData]);

    useEffect(() => {
        axiosInstance.get('codingpage/').then((res) => {
            console.log(res.data);
            setQuesData(res.data);
        });
        console.log(quesData);
    }, [setQuesData]);

    const [code, setCode] = useState("");
    let [consoleResponse, setConsoleResponse] = useState({status: "Console", output: ""});
    let [customInput, setCustomInput] = useState("");

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        console.log(code);
        console.log(language);
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

    const handleLoadBuffer = () => {
        axiosInstance.post('loadbuffer/', {
            qno: question,
        })
        .then((res) => {
            console.log(res.data);
            setCode(res.data.code);
            setLanguage(res.data.lang);
            console.log(language);
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

    const handleCodingChange = (e) => {
        setCode(e);
    }
    
    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
        history.push('/coding/' + e.target.value + '/');
    }

    const clearCode = () =>{
       setCode("");
       
    }

    const [editorMode,seteditorMode] = useState("python")

    const handleEditorModeChange = (e) => {
        if(e.target.value === "py")
        {
            seteditorMode("python")
        }
        else{
            seteditorMode("c_cpp")
        }
    }


    return ( 
           
        <div className="container-fluid">
            <div className="row mx-auto">
                <div className="col-12 col-md-6">
                    <div className="container left-side">
                        <div className="score-div d-flex mb-3">
                            <table className="score">
                                <tr>
                                    <td>Score : {userData.totalScore} </td>
                                </tr>
                            </table>
                            <select id="dropdown-basic" class="ml-auto que-no" value={id} onChange={handleQuestionChange}>
                                    <option class="bg-light opt" value={1}>Q.1</option>
                                    <option class="bg-light opt" value={2}>Q.2</option>
                                    <option class="bg-light opt" value={3}>Q.3</option>
                                    <option class="bg-light opt" value={4}>Q.4</option>
                                    <option class="bg-light opt" value={5}>Q.5</option>
                                    <option class="bg-light opt" value={6}>Q.6</option>
                                    
                                </select>
                        </div>
                        
                        <div className="card que-card">
                            <div className="card-header text-center align-items-center">
                                <h5>Problem Statement</h5>
                            </div>
                            <div className="card-body que-body" id="scroll">
                                
                                <div className="question mb-5">
                                    {quesData[question - 1].question_desc}
                                </div>
                                <div className="mb-3">
                                    INPUT FORMAT
                                    <br />
                                    {quesData[question - 1].iformat}
                                </div>
                                <div className="mb-3">
                                    CONSTRAINTS<br />
                                    {quesData[question - 1].constraints}
                                </div>
                    
                                <div className="mb-3">
                                    OUTPUT FORMAT<br />
                                    {quesData[question - 1].oformat}
                                </div>
                    
                                <div className="mb-3">
                                    SAMPLE INPUT<br />
                                    {quesData[question - 1].sampleInput}
                                </div>
                    
                                <div className="mb-3">
                                    SAMPLE OUTPUT<br />
                                    {quesData[question - 1].sampleOutput}
                                </div>
                    
                                <div className="mb-3">
                                    EXPLANATION<br />
                                    {quesData[question - 1].explanation}
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
                        <textarea className="card custom-area" onChange={ (e) => {setCustomInput(e.target.value)}}></textarea>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-6">
                <div className="wrapper-container right-side ml-3">
                    <div className="lang d-flex"> 
                            
                                <select id="dropdown-basic" value={language} onChange={(e) => {setLanguage(e.target.value);  handleEditorModeChange(e);}}>
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
                        <AceEditor mode={editorMode} theme="monokai" 
                         className="edit"  placeholder="Type your code here" showPrintMargin={false}
                         showGutter={true}
                         onChange={ handleCodingChange }
                         value={code}
                         setOptions={{
                            enableSnippets: true,
                            showLineNumbers: true, 
                            tabSize: 4,
                        }}></AceEditor>
                    </div>

                    <div className="buttons d-flex mt-4 mb-4">
                        <button className="btn btn-info bt"onClick={clearCode}>Clear</button>
                        <button className="btn btn-info bt" onClick={ handleLoadBuffer }>Load Buffer</button>
                        <button className="btn btn-info bt" onClick={ handleRunCode }>Run Code</button>
                        <button className="btn btn-info bt" onClick={ handleCodeSubmit }>Submit</button>
                    </div>
                    
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