
function Menu({ openSignInModal, openLoginModal, user }) {
  return (
    <>
      {
        user ? (
          <></>
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
