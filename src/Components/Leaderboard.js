import './css/leaderboard.css';
import {useState} from 'react';
import {Table} from 'react-bootstrap';

const Leaderboard = () => {
    const [lead, setLead] = useState([
        {id:0, rank:1, name:"abc", total:Math.floor(Math.random()*100) },
        {id:1, rank:2, name:"abc", total:Math.floor(Math.random()*100) },
        {id:2, rank:3, name:"abc", total:Math.floor(Math.random()*100) },
        {id:3, rank:4, name:"abc", total:Math.floor(Math.random()*100) },
        {id:4, rank:5, name:"abc", total:Math.floor(Math.random()*100) },
        {id:5, rank:6, name:"abc", total:Math.floor(Math.random()*100) },
        {id:6, rank:7, name:"abc", total:Math.floor(Math.random()*100) },
        {id:7, rank:8, name:"abc", total:Math.floor(Math.random()*100) },
        {id:8, rank:9, name:"abc", total:Math.floor(Math.random()*100) },
        {id:9, rank:10,name:"abc", total:Math.floor(Math.random()*100) }
    ]);

    return ( 
        <div className="container">
               
                    <Table responsive borderless className="lead-head">
                        <thead className="heading">
                            <tr className="head">
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Total</th>
                            <th></th>
                            </tr>
                        </thead>
                    
                    {/*<Table responsive borderless className="lead-body">*/}
                        <thead>
                            
                            {lead.map((lead) => (
                                <tr key={lead.id} className="elements">
                        
                                    <th>{lead.rank}</th>
                                    <th>{lead.name}</th>
                                    <th>{lead.total}</th>
                                    <th></th>
                                
                                </tr>
                            ))} 
                            
                        </thead>
                    </Table> 
                </div>
     );
}
 
export default Leaderboard;