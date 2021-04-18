import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navb">
            <img src="./img/logo.png" className="nav-log"></img>
            <h1>NCC</h1>
            <div className="links">
                <Link to="/Instructions">Instructions</Link>
                <img src="./img/logo2.png" className="logo"></img>
            </div>
        </nav>
     );
}
 
export default Navbar;