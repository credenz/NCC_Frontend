import './css/submission.css';
import {ProgressBar,Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import Code from './subcode';
import axiosInstance from '../axios';

const Submission = () => {
    let counter = 1;
    const [sub, setSub] = useState([
        {accuracy:0, code: "loading....", submission_time:'00:00'},
        {accuracy:0, code: "loading....", submission_time:'00:00'},
        {accuracy:0, code: "loading....", submission_time:'00:00'},
        {accuracy:0, code: "loading....", submission_time:'00:00'},
]);
    const [question, setQuestion] = useState(1);

    const handlePageChange = (e) => {
        setQuestion(e.selected + 1);
        console.log(question);
        console.log(e);
        
        axiosInstance.post('submissions/', {qno: question}).then((res) => {
            console.log(res.data);
            setSub(res.data);
        });
    }
    useEffect(() => {
        console.log(question);
        axiosInstance.post('submissions/', {qno: question}).then((res) => {
            console.log(res.data);
            setSub(res.data);
        });
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
                        onPageChange={handlePageChange}
                        containerClassName={"paginate"}
                        subContainerClassName={"page paginate"}
                        activeClassName={"active"} />
            </div>
            {sub.map((su) =>(
                    <div className="col-12 col-sm-12">
                        <div className="card sub-card" key={su.status}>
                            <h5 className="card-header text-center">Submission {counter}</h5>
                            <div className="card-body text-center">
                                <Table borderless className="info">
                                <tbody>
                                <tr>
                                        {counter = counter + 1}
                                <td className="time">Time :- {su.submission_time.substr(11, 5)}</td>
                                <td><ProgressBar animated now={su.accuracy} 
                                className="progress1"label={`${su.accuracy}%`}  /></td>
                                <td className="views"><Code code={su.code}/></td>
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



