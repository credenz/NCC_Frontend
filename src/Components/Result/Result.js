import Resultcards from "./Resultcards"
import './Result.css';
import gold from '../svgs/Gold.svg'
import silver from '../svgs/Silver.svg'
import bronze from '../svgs/Bronze.svg' 


const Result = () => {
    return ( 
        <div className="container resultpage ">
             
            <div className="row">
                <div className="col-sm-4">
                    <div className="row "><Resultcards username="ABC" rank="15" score="368" /></div>
                </div>
                <div className="col-sm-8">
                    <div className="row mt-5">
                        <div className="col text-center ml-2">
                        <img className="svgs  svg-down" src ={silver} alt="My Happy SVG"/>
                        <p className="svg-rank">Aneesh Berde</p>
                        </div>
                        <div className="col text-center">
                        <img className="svgs svg-up" src ={gold} alt="My Happy SVG"/>
                        <p className="svg-rank">Anupam Patil</p>
                        </div>
                        <div className="col bronze text-center">
                        <img className="svgs svg-down" src ={bronze} alt="My Happy SVG"/>
                        <p className="svg-rank">Atharva Naphade</p>
                        </div>
                    
                    </div>

                    {/* <div className="row">
                    <img className="svgs" src ={silver} alt="My Happy SVG"/>2. Varada kalaskar</div>
                    <div className="row"> 
                    <img className="svgs" src ={bronze} alt="My Happy SVG"/>3. Esha Anvekar</div> */}
            </div>
            </div>
            </div>
     );
}
 
export default Result;