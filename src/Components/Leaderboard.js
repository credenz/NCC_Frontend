import {Table} from 'react-bootstrap';
import './css/leaderboard.css'
import { useState} from 'react';

const Leaderboard= () => {
    const [lead, setLead] = useState([
        {rank:1,name:'CSK',points:Math.floor(Math.random()*100),accuracy:Math.floor(Math.random()*100)+"%"},
        {rank:2,name:'RCB',points:Math.floor(Math.random()*100),accuracy:Math.floor(Math.random()*100)+"%"},
        {rank:3,name:'SRH',points:Math.floor(Math.random()*100),accuracy:Math.floor(Math.random()*100)+"%"},
        {rank:4,name:'RR',points:Math.floor(Math.random()*100),accuracy:Math.floor(Math.random()*100)+"%"},
        {rank:5,name:'DC',points:Math.floor(Math.random()*100),accuracy:Math.floor(Math.random()*100)+"%"},
        {rank:6,name:'KKR',points:Math.floor(Math.random()*100),accuracy:Math.floor(Math.random()*100)+"%"},
        {rank:7,name:'PBKS',points:Math.floor(Math.random()*100),accuracy:Math.floor(Math.random()*100)+"%"},
        {rank:8,name:'KTK',points:Math.floor(Math.random()*100),accuracy:Math.floor(Math.random()*100)+"%"},
        {rank:9,name:'PWI',points:Math.floor(Math.random()*100),accuracy:Math.floor(Math.random()*100)+"%"},
        {rank:10,name:'MI',points:Math.floor(Math.random()*100),accuracy:Math.floor(Math.random()*100)+"%"}
    ]);
    return ( 
        <div className="leader">
            <div className="left">
                <h1>Result</h1>
            </div>

            <Table responsive borderlesss className="table-head">
                <thead >
                <tr className="head">
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Points</th>
                    <th>Accuracy</th>
                </tr>
                </thead>

                <tbody >
                    {lead.map((lead)=>(
                        <tr key={lead.rank} className="table-data">
                            <td>{lead.rank}</td>
                            <td>{lead.name}</td>
                            <td>{lead.points}</td>
                            <td>{lead.accuracy}</td>
                        </tr>
                    )
                    )}

                </tbody>
            </Table>
        </div>
     );
}
 
export default Leaderboard;