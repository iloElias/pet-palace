import Logo from "./Logo"
import Menu from "./Menu"
import { Link } from "react-router-dom"

function Header({ openSignInModal, openLoginModal }) {
    return (
        <header>
            <Link to="/" className="company-logo" >
                <Logo />
            </Link>
            <div className="menu">
                <Menu openSignInModal={openSignInModal} openLoginModal={openLoginModal} />
            </div>
        </header>
    );
}

export default Header