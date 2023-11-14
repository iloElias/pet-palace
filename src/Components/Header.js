import Logo from "./Logo"
import Menu from "./Menu"

function Header() {
    return (
        <header>
            <a className="company-logo" href="/Home">
                <Logo />
            </a>
            <div className="menu">
                <Menu></Menu>
            </div>
        </header>
    )
}

export default Header