import './css/instructions.css';
import {Link} from 'react-router-dom';

const instructions = () => {

    const inst = [
        { description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Impedit', key:0},
        { description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Impedit', key:1}
      
    ];
    return ( 
        <div className="row whole">
            <div className="inst-box card col-10 col-md-5 mb-5 brdr">
                <div className="inst-title card-title mt-3 brdr">
                    <h2> Instructions <i className="fa fa-lightbulb-o" aria-hidden="true"></i></h2>
                </div>
                <div className="inst-content card-body brdr">
                    <ul>
                       {inst.map(inst => {
                           return(
                           <li key={inst.key}>{inst.description}<p/></li>     
                           );
                        })}
                    </ul>
                </div>
                <div className="confirm brdr">
                <label><input type="checkbox" required id="invalidCheck2"></input><span className="confirm-txt">I have read all the instructions carefully !</span></label>
                </div>
            </div>
            
            <div className="inst-foot col-10 col-md-5">
                <Link to="/Questions"><button for="invalidCheck2" type="submit" className="btn btn-info pro"><strong >Proceed</strong> &nbsp;<i class="fa fa-hand-o-right" aria-hidden="true"></i></button></Link>
            </div>
        </div> 
     );
}
 
export default instructions;