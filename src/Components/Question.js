import './css/quehub.css';
import {useState} from 'react';
import {Table} from 'react-bootstrap';
import {ProgressBar} from 'react-bootstrap';

const Questions = () => {
    const [ques, setQues] = useState([
        {id:0, qno:1, submit:Math.floor(Math.random()*100)},
        {id:1, qno:2, submit:Math.floor(Math.random()*100)},
        {id:2, qno:3, submit:Math.floor(Math.random()*100)},
        {id:3, qno:4, submit:Math.floor(Math.random()*100)},
        {id:4, qno:5, submit:Math.floor(Math.random()*100)},
        {id:5, qno:6, submit:Math.floor(Math.random()*100)}
    ]);

    return ( 
        <div className="row">
            <Table responsive borderless className="tab-head">
                <thead>
                    <tr className="head">
                    <th></th>
                    <th>Q.No</th>
                    <th>Submissions</th>
                    <th>Accuracy</th>
                    <th>Attempt</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {ques.map((ques) => (
                        <tr key={ques.id} className="elements">
                            <td></td>
                            <td>{ques.qno}</td>
                            <td>{ques.submit}</td>
                            <td>
                                <div>
                                <ProgressBar variant="success" now={Math.floor(Math.random() * 100)} className="progress"label={`${Math.floor(Math.random()*100)}%`}  />
                                </div>
                            </td>
                            <td>
                                <button className="btn btn-info atmpt-btn">View</button>
                            </td>
                            <td></td>
                        
                        </tr>
                    ))} 
                    
                </tbody>
            </Table> 
        </div>
     );
}
 
export default Questions;