import { Table } from "react-bootstrap"
import LeaderRow from "./LeaderRow"
import './Leaderboard.css';
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import TitleLeader from "./TitleLeader";
import UserRank from './UserRank';
import axiosInstance from '../../axios';
import Preloader from '../Preloader';

const Leaderboard = () => {
  
    const [isLoading, setIsLoading] = useState(true)

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
            setData(res.data);
           
            setIsLoading(false)
        })
    }, [setData, page]);

    const [result, setResult] = useState({});
    useEffect(() => {
        axiosInstance.get('userstats/').then((res) => {
            setResult(res.data);
        });
    }, [setResult]);
    
    if (isLoading) return <Preloader />

    return ( 
        <div className="leaderboard">
            <Table striped borderless hover className="leadertable">
                <thead>
                    
                        <TitleLeader/>
                    
                </thead>
                
                    {data.map((data)=>(
                        data.rank%2!==0 && <tr className="tablerow"><LeaderRow data={data}/></tr> ||
                        data.rank%2!==0 || <tr className="tablerow"><LeaderRow data={data} /></tr>
                    ))}

                <UserRank data={result}/>
               
            
            </Table>
            <div className="row d-flex justify-content-center">
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={data[0].page_range.length}
                onPageChange={(e) => {setPage(e.selected + 1);}}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
            </div>
        </div>
     );
}
 
export default Leaderboard;