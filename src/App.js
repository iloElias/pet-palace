import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SingInInputs, LoginInputs } from "./Components/AcountInputs";
import PopupTemplate from "./Components/PopupTemplate";
import userImg from "./images/iconUser.png";
import Header from "./Components/Header";
import Home from "./pages/Home";
import "./App.css";

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
        {isModalOpen ? (
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
                <SingInInputs
                  openModal={openModal}
                  userInfo={userInfo}
                  userSetInfo={userSetInfo}
                />
              ) : (
                <LoginInputs
                  openModal={openModal}
                  userInfo={userInfo}
                  userSetInfo={userSetInfo}
                />
              )
            }
          />
        ) : (
          <></>
        )}
      </div>
      <Header
        openSignInModal={() => openModal("signin")}
        openLoginModal={() => openModal("login")}
      />
      <Routes>
        <Route exact path="/" element={<Home userInfo={userInfo} />} />
        {/* <Route exact path="/login" element={<Home userInfo={userInfo} />} /> kk--Teste-- */}
      </Routes>
    </Router>
  );
}

export default App;
