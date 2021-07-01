import Resultcards from "./Resultcards";
import './Result.css';
import gold from '../svgs/Gold.svg';
import silver from '../svgs/Silver.svg';
import bronze from '../svgs/Bronze.svg'; 
import {Alert} from 'react-bootstrap';
import {logout, isLogin} from '../../utils/index';
import axiosInstance from '../../axios';
import { useEffect, useState } from "react";


const Result = () => {
    const [top3, setTop3] = useState([
        {username: {username: 'loading...'}},
        {username: {username: 'loading...'}},
        {username: {username: 'loading...'}}
    ]);
    const [userData, setUserData] = useState({
        username: "Loading...",
        rank: 1,
        totalScore: 69,
        correctly_solved: 0,
        attempted: 2
    });

    useEffect(() => {
        axiosInstance.get('leaderboard/').then((res) => {
            setTop3(res.data);
        });
        axiosInstance.get('userstats/').then((res) => {
            setUserData(res.data);
        })
        logout();
    })
    // if (!isLogin()) {
    //     window.location.href = '/';
    // }
    return ( 
        <>
        
        
        <div className="container resultpage ">
             
            <div className="row">
                <div className="col-sm-4">
                    <div className="row "><Resultcards username={userData.username} rank={userData.rank} score={userData.totalScore} /></div>
                </div>
                <div className="col-sm-8">
                    <div className="congo mt-4 shadow">
                    <Alert key={1} variant="success"className="d-flex align-items-center justify-content-center alert">
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx={26} cy={26} r={25} fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                        <strong>Congratulations on Successfully completing the event !!</strong>
                    </Alert>
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center ml-2">
                        <img className="svgs  svg-down" src ={silver} alt="medal"/>
                        <p className="svg-rank">{top3[1].username.username}</p>
                        </div>
                        <div className="col text-center">
                        <img className="svgs svg-up" src ={gold} alt="medal"/>
                        <p className="svg-rank">{top3[0].username.username}</p>
                        </div>
                        <div className="col bronze text-center">
                        <img className="svgs svg-down" src ={bronze} alt="medal"/>
                        <p className="svg-rank">{top3[2].username.username}</p>
                        </div>
                    
                    </div>

                    
            </div>
            </div>
            </div>
        
            </>
     );
}
 
export default Result;