import {Link} from "react-router-dom";
import logo from "../assets/big-logo.png";
import "../css/NavBar.css";

export default function NavBar () {
    return (
        <nav className="NavBar">
            <img src={logo} alt="SunChaser logo" height="250px" />
            <div className="NavBarItems">
                <Link className="NavBarLink" to="/">Shortlist</Link>
                <Link className="NavBarLink" to="/search">Search</Link>
            </div>
                
        </nav>
    )
}