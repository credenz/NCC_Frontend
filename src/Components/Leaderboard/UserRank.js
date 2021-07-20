import './Leaderboard.css';
const UserRank = ({data}) => {
    return ( 
        <div className="userrank">
            <td>
                <p className="data">{data.rank}</p>
            </td>
            <td>
                <p className="datauser">{data.username}</p>
            </td>
            <td>
                <p className="data">Q1</p>
            </td>
            <td>
                <p className="data">Q2</p>
            </td>
            <td>
                <p className="data">Q3</p>
            </td>
            <td>
                <p className="data">Q4</p>
            </td>
            <td>
                <p className="data">Q5</p>
            </td>
            <td>
                <p className="data">Q6</p>
            </td>
            <td>
                <p className="datascore">{data.totalScore}</p>
            </td>
        </div>
     );
}
 
export default UserRank;