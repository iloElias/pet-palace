function Menu({ openSignInModal, openLoginModal }) {
    return (
        <>
            <button className="menu-button">Home</button>
            <button className="menu-button" onClick={openLoginModal}>Login</button>
            <button className="menu-button" onClick={openSignInModal}>Sign-in</button>
        </>
    );
}

export default Menu