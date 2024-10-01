import { Link } from "react-router-dom";
import "./Navbar.scss"
const Navbar = () => {
    return (
        <>
        <ul className="header__navbar">
            <li>
                <Link to="/">
                <p className="header__pages">Stories</p>
                </Link>
            </li>
            <li>
            <Link to="/events">
                <p className="header__pages">Events</p>
                </Link>
            </li>
            <li>
                <Link to="/organizations">
                <p className="header__pages">Organizations</p>
                </Link>
            </li>
            <li>
                <Link to="/concepts//">
                <p className="header__pages">Concepts</p>
                </Link>
            </li>
        </ul>
        </>
    )
}
export default Navbar;