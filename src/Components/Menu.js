
function Menu({ openSignInModal, openLoginModal, user, handleLogout }) {
  return (
    <>
      {
        user ? (
          <>
            <button className="menu-button" onCanPlay={handleLogout}>
              Fazer logout
            </button>
          </>
        ) : (
          <>
            <button className="menu-button" onClick={openLoginModal}>
              Login
            </button>
            <button className="menu-button" onClick={openSignInModal}>
              Sign-in
            </button>
          </>
        )
      }
    </>
  );
}

export default Menu;
