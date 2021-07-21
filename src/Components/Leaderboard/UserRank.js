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
 
export default UserRank;