import './css/instructions.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Instructions = () => {

    const inst = [
        { description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Impedit', key:0},
        { description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Impedit', key:1}
      
    ];

    const [ischecked,setischecked] = useState(false);

    const clickHandler = () => {
        setischecked(!ischecked)
    }

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
                <label><input type="checkbox" onChange={clickHandler} required id="invalidCheck2" ></input><span className="confirm-txt">I have read all the instructions carefully !</span></label>
                </div>
            </div>
            
            <div className="inst-foot col-10 col-md-5">
            <button disabled={!ischecked} type="submit" className="btn btn-info pro" 
            onClick={
                 (e) => {
                 e.preventDefault();
                 window.location.pathname = '/Questions';}
                }><strong >Proceed</strong> &nbsp;<i class="fa fa-hand-o-right" aria-hidden="true"></i></button>
            </div>
        </div> 
     );
}
 
export default Instructions;
