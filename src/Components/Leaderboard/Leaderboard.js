import { Table } from "react-bootstrap"
import LeaderRow from "./LeaderRow"
import './Leaderboard.css';
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import TitleLeader from "./TitleLeader";
import UserRank from "./UserRank";
import axiosInstance from '../../axios';

const Leaderboard = () => {
    // const [data, setData] = useState([
    //     {rank:'1', username:'ABC',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'80'},
    //     {rank:'2', username:'DEF',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'78'},
    //     {rank:'3', username:'GHI',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'77'},
    //     {rank:'4', username:'JKL',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'69'},
    //     {rank:'5', username:'MNO',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'58'},
    //     {rank:'6', username:'PQR',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'50'},
    //     {rank:'7', username:'PQR',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'50'},
    //     {rank:'8', username:'PQR',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'50'},
    //     {rank:'9', username:'PQR',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'50'},
    //     {rank:'10', username:'PQR',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'50'}
    // ])
    const [page, setPage] = useState(1);
    const [data, setData] = useState([
        {username: {
            username: 'loading...'
        }, totalScore: 69, scorelist: [1, 2, 3, 4, 5, 6]},
        {username: 'loading...', totalScore: 69, scorelist: [1, 2, 3, 4, 5, 6]},
        {username: 'loading...', totalScore: 69, scorelist: [1, 2, 3, 4, 5, 6]}
    ])
    useEffect(() => {
        axiosInstance.get('leaderboard/?page=' + page).then((res) => {
            console.log(res.data);
            setData(res.data);
        })
    }, [setData, page]);
    return ( 
        <div className="leaderboard">
            <Table striped borderless hover responsive className="leadertable">
                <thead>
                    
                        <TitleLeader/>
                    
                </thead>
                
                    {data.map((data)=>(
                        data.rank%2!==0 && <tr className="tablerow" style={{height:"2vw"}}><LeaderRow data={data}/></tr> ||
                        data.rank%2!==0 || <tr className="tablerow"><LeaderRow data={data} /></tr>
                    ))}
                <UserRank/>
            </Table>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                /*pageCount={pagecount}*/
                onPageChange={(e) => {setPage(e.selected + 1); console.log(e.selected + 1)}}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div>
     );
}
 
export default Leaderboard;