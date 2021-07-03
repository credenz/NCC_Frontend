import {Link} from 'react-router-dom';
import './css/footer.css';

const Footer = () => {
    return ( 
        <>
        <div className="pad" style={{padding:"2.5%"}}></div>
        <footer className="footer fixed-bottom">
            &copy; PICT IEEE STUDENT BRANCH || Developed By PISB <Link className="team" to="/team">WEB TEAM</Link>
        </footer>
        </>
        
     );
}
 
export default Footer;
