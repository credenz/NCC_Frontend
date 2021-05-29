import './css/submission.css';
import {ProgressBar,Table} from 'react-bootstrap';
import {useState} from 'react';
import ReactPaginate from 'react-paginate';

const Submission = () => {
    const [sub, setSub] = useState([
        {id:0, subno:1, time:'00:00'},
        {id:1, subno:2, time:'10:00'},
        {id:2, subno:3, time:'00:56'},
        {id:3, subno:4, time:'24:00'}
]);
    return (

       <>
         <div className="row rcard">
            <div className="row">
                <ReactPaginate
                        initialPage={1}
                     	previousLabel={"Questions"}
                        nextLabel={"Next"}
                        pageCount={6}
                        onPageChange={console.log("click")}
                        containerClassName={"paginate"}
                        subContainerClassName={"page paginate"}
                        activeClassName={"active"} />
            </div>

            {sub.map((sub) =>(
                    <div className="col-12 col-sm-12">
                        <div className="card sub-card" key={sub.id}>
                            <h5 className="card-header text-center">Submission {sub.subno}</h5>
                            <div className="card-body text-center">
                                <Table borderless className="info">
                                <tbody>
                                <tr>
                                <td className="time">Time :- {sub.time}</td>
                                <td><ProgressBar animated variant="info" now={Math.floor(Math.random() * 100)} 
                                className="progress1"label={`${Math.floor(Math.random()*100)}%`}  /></td>
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



