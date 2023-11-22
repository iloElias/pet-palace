import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignInInputs, LoginInputs } from "./Components/AcountInputs";
import { useState } from "react";
import PopupTemplate from "./Components/PopupTemplate";
import userImg from "./images/iconUser.png";
import notFoundImg from "./images/notFound.png";
import Header from "./Components/Header";
import Home from "./pages/Home";
import "./App.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <img src={notFoundImg} alt="" />
        <h1>404 - Página não encontrada</h1>
        <p>
          A página na qual voce foi redirecionado, não pode ser encontrada ou
          está desativada
        </p>
      </div>
    </div>
  );
}

function DefaultLayout({ children, header }) {
  return (
    <>
      {header}
      {children}
    </>
  );
}

function App() {
  const [user, setUser] = useState();
  const [userID, setUserID] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userCPF, setUserCPF] = useState();
  const [userTel, setUserTel] = useState();

  let userInfo = {
    user,
    userID,
    userEmail,
    userPassword,
    userLastName,
    userCPF,
    userTel,
  };
  let userSetInfo = {
    setUser,
    setUserID,
    setUserEmail,
    setUserPassword,
    setUserLastName,
    setUserCPF,
    setUserTel,
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };

  return (
    <Router>
      <div
        id="modal-root"
        className={`modal ${isModalOpen ? "modal-open" : ""}`}
      >
        {isModalOpen && (
          <PopupTemplate
            onClose={closeModal}
            title={
              modalType === "signin"
                ? "Faça seu cadastro"
                : "Entrar na sua conta"
            }
            dialogImg={userImg}
            component={
              modalType === "signin" ? (
                <SignInInputs
                  openModal={openModal}
                  closeModal={closeModal}
                  userInfo={userInfo}
                  userSetInfo={userSetInfo}
                />
              ) : (
                <LoginInputs
                  openModal={openModal}
                  closeModal={closeModal}
                  userInfo={userInfo}
                  userSetInfo={userSetInfo}
                />
              )
            }
          />
        )}
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <DefaultLayout
              header={
                <Header
                  openSignInModal={() => openModal("signin")}
                  openLoginModal={() => openModal("login")}
                />
              }
            >
              <Home userInfo={userInfo} />
            </DefaultLayout>
          }
        />
        <Route path="*" element={<NotFound />} />
        {/* <Route exact path="/login" element={<Home userInfo={userInfo} />} /> kk--Teste-- */}
      </Routes>
    </Router>
  );
}

export default App;
