import Navbar from "../Navbar/Navbar";
import "./Header.scss";
const Header = () => {
    return (
        <>
        <header className="header">
        <Navbar />
        <h2 className="header__title">The University</h2>
        </header>
        </>
    )
}
export default Header;