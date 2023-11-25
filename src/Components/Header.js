import Logo from "./Logo"
import Menu from "./Menu"
import { Link } from "react-router-dom"

function Header({ openSignInModal, openLoginModal, user }) {
    return (
        <header>
            <Link to="/" className="company-logo" >
                <Logo />
            </Link>
            <div className="menu">
                <Menu openSignInModal={openSignInModal} openLoginModal={openLoginModal} user={user} />
            </div>
        </header>
    );
}

export default Header