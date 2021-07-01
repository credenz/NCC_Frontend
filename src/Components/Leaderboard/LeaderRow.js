import './Leaderboard.css';
import { Table } from "react-bootstrap";
const LeaderRow = ({data}) => {
    return ( 
        <div className="leaderrow">
            
                <td>
                    <p className="data">{data.rank}</p>
                </td>
                <td>
                    <p className="datauser">{data.username.username}</p>
                </td>
                <td>
                    <p className="data">{data.scorelist[0]}</p>
                </td>
                <td>
                    <p className="data">{data.scorelist[1]}</p>
                </td>
                <td>
                    <p className="data">{data.scorelist[2]}</p>
                </td>
                <td>
                    <p className="data">{data.scorelist[3]}</p>
                </td>
                <td>
                    <p className="data">{data.scorelist[4]}</p>
                </td>
                <td>
                    <p className="data">{data.scorelist[5]}</p>
                </td>
                <td>
                    <p className="datascore">{data.totalScore}</p>
                </td>
            
        </div>
     );
}
 
export default LeaderRow;