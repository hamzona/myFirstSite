import { Link } from "react-router-dom";
import './nav.css'


function NavBar(){
    return <nav className="nav-cont">
        <Link className="nav-link">home</Link>
        <Link className="nav-link" to="/">Make quiz</Link>
        <Link className="nav-link" to="/start">start</Link>
    </nav>
}
export default NavBar;
