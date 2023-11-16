import Logo from "./Logo"
import Menu from "./Menu"

function Header({ openSignInModal, openLoginModal }) {
    return (
        <header>
            <a className="company-logo" href="/Home">
                <Logo />
            </a>
            <div className="menu">
                <Menu openSignInModal={openSignInModal} openLoginModal={openLoginModal} />
            </div>
        </header>
    );
}

export default Header