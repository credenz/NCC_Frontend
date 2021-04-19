import './css/quehub.css';
import {Table} from 'react-bootstrap';

const questions = () => {

    return ( 
        <div className="row">
            <Table responsive className="tab">
                <thead className="th">
                    <tr>
                    <th>Sr.No</th>
                    <th>Submissions</th>
                    <th>Accuracy</th>
                    <th>Attempt</th>
                    </tr>
                </thead>
                <tbody className="tb">
                    <tr className="r">
                    <td>1</td>
                    <td>Otto</td>
                    <td>
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    </td>
                    <td>skhfsk</td>
                    </tr>
                    <tr className="r">
                    <td>2</td>
                    <td>Thornton</td>
                    <td>
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    </td>
                    <td>akhdhkajs</td>
                    </tr>
                    <tr className="r">
                    <td>3</td>
                    <td>@twitter</td>
                    <td>
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    </td>
                    <td>akhdhkajs</td>
                    </tr>
                    <tr className="r">
                    <td>4</td>
                    <td>@twitter</td>
                    <td>
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    </td>
                    <td>akhdhkajs</td>
                    </tr>
                    <tr className="r">
                    <td>5</td>
                    <td>@twitter</td>
                    <td>
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    </td>
                    <td>akhdhkajs</td>
                    </tr>
                    <tr className="r">
                    <td>6</td>
                    <td>@twitter</td>
                    <td>
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    </td>
                    <td>akhdhkajs</td>
                    </tr>
                </tbody>
            </Table>
        </div>
     );
}
 
export default questions;