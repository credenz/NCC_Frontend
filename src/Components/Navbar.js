import {Link} from 'react-router-dom';
import Logout from './Logout';
import Leaderboard from './Leaderboard'

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-sm navbar-light justify-content-right nbt">
            <Link className="navbar-brand ht">NCC</Link>
            <span className="clock" />
            <button className="navbar-toggler navbar-dark " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon navbar-dark" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> 
                <ul className="navbar-nav ">
                <li className="nav-item ">
                    <Link className="nav-link no" to="/Questions">Question Hub </Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link no" to="/Submissions">Submissions</Link>
                </li>
                <li>
                <Link className="nav-link no"><Logout /></Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link no" to="/Leaderboard">Leaderboard</Link>
                </li>
                </ul>
                
                <img className="logo" src="../img/logo2.png" />
            </div>
        </nav>

    )
  
}
export default Navbar;