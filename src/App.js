import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignInInputs, LoginInputs } from "./Components/AcountInputs";
import { useState } from "react";
import PopupTemplate from "./Components/PopupTemplate";
import userImg from "./images/iconUser.png";
import notFoundImg from "./images/ERRO_404.gif";
import notAllowedImg from "./images/ERRO_403.gif";
import Header from "./Components/Header";
import Administracao from "./pages/Administracao";
import { CadastroFuncionarios, CadastroServicos, GerenciarFuncionarios, GerenciarServicos } from "./pages/ControleGeral";
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

function NotAllowed() {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <img src={notAllowedImg} alt="" />
        <h1>403 - Página não pode ser acessada</h1>
        <p>
          Você não tem permissão para entrar na pagina redirecionada, entre em uma conta autorizada para continuar
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

function App({ testeUserName }) {
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

  if (testeUserName) {
    setUser(testeUserName)
  }

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
            children={
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
                  user={user}
                />
              }
            >
              <Home userInfo={userInfo} />
            </DefaultLayout>
          }
        />

        <Route
          exact
          path="/administracao"
          element={
            <DefaultLayout
              header={
                <Header
                  openSignInModal={() => openModal("signin")}
                  openLoginModal={() => openModal("login")}
                  user={user}
                />
              }
            >
              {
                (user ?
                  <Administracao userInfo={userInfo} /> :
                  <NotAllowed />
                )
              }
            </DefaultLayout>
          }
        />

        <Route
          exact
          path="/administracao/servicos"
          element={
            <DefaultLayout
              header={
                <Header
                  openSignInModal={() => openModal("signin")}
                  openLoginModal={() => openModal("login")}
                  user={user}
                />
              }
            >
              {(user ?
                <GerenciarServicos userInfo={userInfo} /> :
                <NotAllowed />
              )}
            </DefaultLayout>
          }
        />

        <Route
          exact
          path="/administracao/funcionarios"
          element={
            <DefaultLayout
              header={
                <Header
                  openSignInModal={() => openModal("signin")}
                  openLoginModal={() => openModal("login")}
                  user={user}
                />
              }
            >
              {(user ?
                <GerenciarFuncionarios userInfo={userInfo} /> :
                <NotAllowed />
              )}
            </DefaultLayout>
          }
        />

        <Route
          exact
          path="/administracao/cadastro/servicos"
          element={
            <DefaultLayout
              header={
                <Header
                  openSignInModal={() => openModal("signin")}
                  openLoginModal={() => openModal("login")}
                  user={user}
                />
              }
            >
              {(user ?
                <CadastroServicos userInfo={userInfo} /> :
                <NotAllowed />
              )}
            </DefaultLayout>
          }
        />

        <Route
          exact
          path="/administracao/cadastro/funcionarios"
          element={
            <DefaultLayout
              header={
                <Header
                  openSignInModal={() => openModal("signin")}
                  openLoginModal={() => openModal("login")}
                  user={user}
                />
              }
            >
              {(user ?
                <CadastroFuncionarios userInfo={userInfo} /> :
                <NotAllowed />
              )}
            </DefaultLayout>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export { App, NotAllowed };
