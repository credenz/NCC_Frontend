import './css/navbar.css';
import Logout from './Logout';
import Timer from './Timer/Timer';
import { NavLink,useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';



const Navbar = ({finalTime}) =>{

    const location = useLocation();
  if (
    location.pathname === "/Questions" ||
    location.pathname === "/Submissions" ||
    location.pathname.includes("coding") ||
    location.pathname.includes("testcase") ||
    location.pathname === "/Leaderboard"
    )
    return (
        <nav className="navbar navbar-expand-sm justify-content-right nbt">
           <img className="ncc" src="../img/NCC_21.png" />
            <Timer finalTime={finalTime} />
            <button className="navbar-toggler navbar-dark " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon navbar-dark" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> 
                <ul className="navbar-nav ">
                <li className="nav-item">
              <NavLink
                to="/Questions"
                className="nav-link no"
                activeClassName="currentpage"
              >
                QuestionHub
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Submissions"
                className="nav-link no"
                activeClassName="currentpage"
              >
                Submissions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Leaderboard"
                className="nav-link no"
                activeClassName="currentpage"
              >
                Leaderboard
              </NavLink>
            </li>
                <li className="nav-item">
                <Link className="nav-link no"><Logout /></Link>
                </li>
                </ul>
                <img className="logo" src="../img/logo2.png" />
            </div>
        </nav>

    );
    return(
        <nav className="navbar navbar-expand-sm justify-content-right nbt">
           <img className="ncc" src="../img/NCC_21.png" />
           <h5 className="ncc-title">National Computing Contest</h5>
           <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> 
            <img className="logo" src="../img/logo2.png" />
           </div>
        </nav>

    );
  
}
export default Navbar;