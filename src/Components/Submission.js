import './css/submission.css';
import {ProgressBar,Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import Code from './subcode';
import axiosInstance from '../axios';
import Preloader from './Preloader';

const Submission = () => {
    let counter = 0;
    const [isLoading, setIsLoading] = useState(true)
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
            setIsLoading(false)
        });
    }, [setSub, question])
    
    if (isLoading) return <Preloader />
    return (

       <>
         <div className="row rcard">
            <div className="row">
                <ReactPaginate
                        initialPage={0}
                     	previousLabel={"Questions"}
                        nextLabel={"Next"}
                        pageCount={8}
                        onPageChange={(e) => {setQuestion(e.selected + 1); console.log(e.selected + 1)}}
                        containerClassName={"paginate"}
                        subContainerClassName={"page paginate"}
                        activeClassName={"active"} />
            </div>
            {sub.map((su) =>(
                    <div className="col-12 col-sm-12">
                        <div className="card sub-card" key={su.status}>
                            <h5 className="card-header text-center">Submission {counter+=1}</h5>
                            <div className="card-body text-center">
                                <Table borderless className="info">
                                <tbody>
                                <tr>
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



