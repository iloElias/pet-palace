import { Link } from "react-router-dom";

function Menu({ openSignInModal, openLoginModal }) {
  return (
    <>
      <Link to="/" className="menu-button">
        Home
      </Link>
      <button className="menu-button" onClick={openLoginModal}>
        Login
      </button>
      <button className="menu-button" onClick={openSignInModal}>
        Sign-in
      </button>
    </>
  );
}

export default Menu;
