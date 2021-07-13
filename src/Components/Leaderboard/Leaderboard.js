import { Table } from "react-bootstrap"
import LeaderRow from "./LeaderRow"
import './Leaderboard.css';
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import TitleLeader from "./TitleLeader";

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
            console.log(res.data);
            setData(res.data);
           
            setIsLoading(false)
        })
    }, [setData, page]);

    
   

    if (isLoading) return <Preloader />

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
            
            </Table>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
              pageCount={data[0].page_range.length}
                onPageChange={(e) => {setPage(e.selected + 1); console.log(e.selected + 1)}}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div>
     );
}
 
export default Leaderboard;