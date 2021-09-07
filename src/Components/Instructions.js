import './css/instructions.css';
import { useState } from 'react';

const Instructions = () => {

    const inst = [
        { description: 'This round comprises of 6 questions.', key:0},
        { description: 'All questions have marking scheme of +100 for right submissions.', key:1},
        { description: 'FOR SENIORS: There is no partial marking for the Seniors.', key:2},
        { description: 'FOR JUNIORS: Partial marking will be given according to the test cases passed.', key:3},
        { description: 'Only C/C++/python are available for coding.', key:4},
        { description: 'Player can create their own sample test cases for testing.', key:5},
        { description: 'Player can choose any editor they want or use the one provided by us.', key:6},
        { description: 'Latest submission will be save in the buffer, you can view that using the load buffer button provided.', key:7},
        { description: 'The Duration of the round is 2 hours.', key:8},
        { description: 'Players may view all their submissions on Submissions page.', key:9},
        { description: 'Players can anytime view their Rank on Leaderboard page.', key:10},
        { description: 'Code plagiarism isn\'t allowed, anyone found doing so will be disqualified.', key:11},


      
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
