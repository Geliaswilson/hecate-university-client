import { Link } from "react-router-dom";
import "./Navbar.scss"
const Navbar = () => {
    return (
        <>
        <ul className="navbar">
            <li>
                <Link to="/">
                <p>Stories</p>
                </Link>
            </li>
            <li>
            <Link to="/events">
                <p>Events</p>
                </Link>
            </li>
            <li>
                <Link to="/organizations">
                <p>Organizations</p>
                </Link>
            </li>
            <li>
                <Link to="/concepts">
                <p>Concepts</p>
                </Link>
            </li>
        </ul>
        </>
    )
}
export default Navbar;