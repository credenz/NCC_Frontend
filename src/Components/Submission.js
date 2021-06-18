import './css/submission.css';
import {ProgressBar,Table} from 'react-bootstrap';
import {useState} from 'react';
import ReactPaginate from 'react-paginate';
import axiosInstance from '../axios';
import { useEffect } from 'react';

const Submission = () => {
    let subno = 0;

    const [qno, setQno] = useState(1);
    const [sub, setSub] = useState([
        {id:0, subno:1, submission_time:'00:00'},
        {id:1, subno:2, submission_time:'10:00'},
        {id:2, subno:3, submission_time:'00:56'},
        {id:3, subno:4, submission_time:'24:00'}
    ]);

    const onQuesChange = (e) => {
        setQno(e.selected);
        console.log(qno);
        console.log(e);
        axiosInstance.post('submissions/', {qno: qno}).then((res) => {
            console.log(res.data);
            setSub(res.data);
        })
    }

    useEffect(() => {
        axiosInstance.post('submissions/', {qno: qno}).then((res) => {
            console.log(res.data);
            setSub(res.data);
        })
    }, [setSub])

    
    return (

       <>
         <div className="row rcard">
            <div className="row">
                <ReactPaginate
                        initialPage={1}
                     	previousLabel={"Questions"}
                        nextLabel={"Next"}
                        pageCount={6}
                        onPageChange={onQuesChange}
                        containerClassName={"paginate"}
                        subContainerClassName={"page paginate"}
                        activeClassName={"active"} />
            </div>

            {sub.map((sub) =>(
                
                    <div className="col-12 col-sm-12">
                        { subno = subno + 1 }
                        <div className="card sub-card" key={sub.id}>
                            <h5 className="card-header text-center">Submission {subno}</h5>
                            <div className="card-body text-center">
                                <Table borderless className="info">
                                <tbody>
                                <tr>
                                <td className="time">Time :- {sub.submission_time}</td>
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



