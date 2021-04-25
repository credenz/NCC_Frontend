import './css/submission.css';
import {ProgressBar} from 'react-bootstrap';
import {useState} from 'react';

const Submission = () => {
    const [sub, setSub] = useState([
        {id:0, subno:1},
        {id:1, subno:2},
        {id:2, subno:3},
        {id:3, subno:4},
        {id:4, subno:5}
       
]);
    return (

       <>
         <div className="row rcard">
            {sub.map((sub) =>(
                    <div className="col-10 col-sm-4 col-md-3">
                        <div className="card sub-card" key={sub.id}>
                            <h5 className="card-header text-center">Submission {sub.subno}</h5>
                            <div className="card-body text-center">
                                <p className="time">Time : 00 : 00</p>
                                <p className="status">Status</p>
                                <ProgressBar variant="info" now={Math.floor(Math.random() * 100)} 
                                className="progress"label={`${Math.floor(Math.random()*100)}%`}  />
                                <div className="btn btn-info view">View</div>
                            </div>
                        </div>
                    </div>
                     ))}
            </div>
           
       </>     
    
     ); 
}
 
export default Submission;

