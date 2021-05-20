import './css/submission.css';
import {ProgressBar,Table} from 'react-bootstrap';
import {useState} from 'react';

const Submission = () => {
    const [sub, setSub] = useState([
        {id:0, subno:1},
        {id:1, subno:2},
        {id:2, subno:3},
        {id:3, subno:4}
]);
    return (

       <>
         <div className="row rcard">
            {sub.map((sub) =>(
                    <div className="col-12 col-sm-12">
                        <div className="card sub-card" key={sub.id}>
                            <h5 className="card-header text-center">Submission {sub.subno}</h5>
                            <div className="card-body text-center">
                                <Table responsive borderless className="info">
                                <tbody>
                                <tr>
                                <td className="time">Time :- 00 : 00</td>
                                <td><ProgressBar animated variant="info" now={Math.floor(Math.random() * 100)} 
                                className="progress"label={`${Math.floor(Math.random()*100)}%`}  /></td>
                                <td className="btn btn-info view">View</td>
                                </tr>
                                </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                     ))}
            </div>
           
       </>     
    
     ); 
}
 
export default Submission;



