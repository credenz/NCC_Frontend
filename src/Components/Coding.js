import './css/coding.css';
import './css/questionPreloader.css'
import AceEditor from 'react-ace';
import Preloader from './Preloader'
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

import 'katex/dist/katex.min.css';
var Latex = require('react-latex');

const QuestionPreloader = ()=>{
    return (
  		    <div className="qloader-p" />
    )
}

const Coding = () => {
    const history = useHistory();
    const { id } = useParams();
   const[isSubmitted, setIsSubmitted] = useState(false)
    const [language, setLanguage] = useState('py');
    const [question, setQuestion] = useState(1);
    const [quesData, setQuesData] = useState([{
        question_desc: "Loading...",
        pk: 1
    }]);
    const [questionLoading, setQuestionLoading] = useState(false)
    const [userData, setUserData] = useState({
        totalScore: 'Loading...'
    })

    useEffect(() => {
        axiosInstance.get('userstats/').then((res) => {
            setUserData(res.data);
            
        });
    }, [setUserData]);



    useEffect(() => {
        setQuestionLoading(true)
        axiosInstance.post('codingpage/', {qno: id}).then((res) => {
            
            setQuesData(res.data);
            setQuestionLoading(false)
        });
    }, [setQuesData])

    const [code, setCode] = useState("");
    let [consoleResponse, setConsoleResponse] = useState({status: "Console", output: ""});
    let [customInput, setCustomInput] = useState("");

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        
        
        setIsSubmitted(true)
        axiosInstance
            .post('codesubmit/',{
                qno: id,
                lang: language,
                code: code
            })
            .then((res) => {
                
                setConsoleResponse(res.data.console_out);
                history.push('/testcase', res.data)
                setIsSubmitted(false)
            })

        
    }

    const handleLoadBuffer = () => {
        axiosInstance.post('loadbuffer/', {
            qno: id,
        })
        .then((res) => {
            
            setCode(res.data.code);
            setLanguage(res.data.lang);
            
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
               
                setConsoleResponse(res.data);
                
            });
    }

    const handleCodingChange = (e) => {
        setCode(e);
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


        let fileReader;
        
        const handleFileRead = (e) => {
          const content = fileReader.result;
          setCode(content);
          // ??? do something with the 'content' ???
        };
        
        const handleFileChosen = (file) => {
          var extension =file.name.split('.').pop().toLowerCase();
          if(extension==="cpp" || extension==="c" || extension==="py" )
          {
            fileReader = new FileReader();
            fileReader.onloadend = handleFileRead;
            fileReader.readAsText(file);
          }
          else {alert("Uploading only .c, .cpp & .py files is allowed.");}
        
      };
    
     
    if (isSubmitted)
        return (
            <Preloader/>
        )

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
                           
                        </div>
                        
                            <div className="card que-card">
                            <div className="card-header text-center align-items-center">
                                <h5>Problem Statement</h5>
                            </div>
                            
                            <div className="card-body que-body" id="scroll">
                                {questionLoading? <QuestionPreloader />: <>
                                <div className="question mb-5 codingtext">
                                    <pre>
                                    <Latex>
                                    {`${quesData[0].question_desc}`}
                                    </Latex>
                                    </pre>
                                </div>
                                <div className="mb-3 codingtext">
                                    INPUT FORMAT
                                    <br />
                                    <pre>
                                    <Latex>
                                    {`${quesData[0].iformat}`}
                                    </Latex>
                                    </pre>
                                   
                                </div>
                                <div className="mb-3 codingtext">
                                    CONSTRAINTS<br />
                                    <pre>
                                    <Latex>
                                    {`${quesData[0].constraints}`}
                                    </Latex>
                                     </pre>
                                </div>
                    
                                <div className="mb-3 codingtext">
                                    OUTPUT FORMAT<br />
                                    <pre>
                                    <Latex>
                                    {`${quesData[0].oformat}`}
                                    </Latex>
                                    </pre>
                                </div>
                    
                                <div className="mb-3 codingtext">
                                    SAMPLE INPUT<br />
                                    <pre>
                                    <Latex>
                                    {`${ quesData[0].sampleInput }`}
                                    </Latex>
                                    </pre>
                                  
                                </div>
                    
                                <div className="mb-3 codingtext">
                                    SAMPLE OUTPUT<br />
                                    <pre>
                                    <Latex>
                                    {`${quesData[0].sampleOutput}` }
                                    </Latex>
                                    </pre>
                                  
                                </div>
                    
                                <div className="mb-3 codingtext">
                                    EXPLANATION<br />
                                    <pre>
                                    <Latex>
                                        {`${quesData[0].explanation }`}
                                    </Latex>
                                    </pre>
                                    
                                </div></>}
                                
                            </div>
                        </div>
                        
                        
                        
                        <div className="check d-flex align-items-left mt-4 mb-4">
                            <label><input type="checkbox" for="input" name="input" /><span className="ml-2">Custom Input</span></label>
                        </div>

                        <span className="cust-inp" style={{color:"white"}}>
                            <h6>Custom Input</h6>
                        </span>

                        <div className="custom-input mt-2">
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
                                    <Form.File id="file-input" name="file-input" onChange={(e) => handleFileChosen(e.target.files[0])} hidden/>
                                    <label for="file-input" class="inp">Choose File</label>
                                </Form.Group>
                            </Form>
                    </div>
                    
                    <div className="code-editor">
                        <AceEditor mode={editorMode} theme="monokai" 
                         className="edit"  placeholder="Type your code here" showPrintMargin={false}
                         showGutter={true}
                         onChange={ handleCodingChange }
                         fontSize={15}
                         value={code}
                         highlightActiveLine={true}
                         setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true, 
                            tabSize: 4,
                        }}/>
                    </div>

                    <div className="buttons d-flex mt-4 mb-4">
                        <button className="btn btn-info bt"onClick={clearCode}>Clear</button>
                        <button className="btn btn-info bt" onClick={ handleLoadBuffer }>Load Buffer</button>
                        <button className="btn btn-info bt" onClick={ handleRunCode }>Run Code</button>
                        <button className="btn btn-info bt" onClick={ handleCodeSubmit }>Submit</button>
                    </div>
                    
                    <span className="console-txt mb-5" style={{color:"white"}}>
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