import { useState } from "react";
import './App.css';
import Header from "./Components/Header";
import { SingInInputs, LoginInputs } from "./Components/AcountInputs"
import PopupTemplate from "./Components/PopupTemplate";
import userImg from "./images/iconUser.png"

function App() {
  const [user, setUser] = useState();
  const [userID, setUserID] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userCPF, setUserCPF] = useState();
  const [userTel, setUserTel] = useState();

  let userInfo = { user, userID, userEmail, userPassword, userLastName, userCPF, userTel };
  let userSetInfo = { setUser, setUserID, setUserEmail, setUserPassword, setUserLastName, setUserCPF, setUserTel };

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    closeModal();
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };


  return (
    <>
      <div id="modal-root" className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        {isModalOpen ? (
          <PopupTemplate onClose={closeModal} title={modalType === "signin" ? "Faça seu cadastro" : "Entrar na sua conta"} dialogImg={userImg}
            component={modalType === "signin" ? <SingInInputs openModal={openModal} userInfo={userInfo} userSetInfo={userSetInfo} /> : <LoginInputs openModal={openModal} userInfo={userInfo} userSetInfo={userSetInfo} />} />
        ) : (
          <></>
        )}
      </div>
      <Header openSignInModal={() => openModal("signin")} openLoginModal={() => openModal("login")} />
      <div className="App">
        <h1>
          Meu primeiro app
        </h1>
        <p>
          Esta é a minha primeira aplicação React
        </p>
      </div>
    </>
  );
}

export default App;
