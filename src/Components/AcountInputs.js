import { auth, createUserWithEmailAndPassword, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc, collection } from "firebase/firestore";

function SignInInputs({ openModal, closeModal, userInfo, userSetInfo }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { elements } = event.target;

    try {
      const nome = elements.nome.value;
      const sobrenome = elements.sobrenome.value;
      const cpf = elements.cpf.value;
      const telefone = elements.telefone.value;
      const email = elements.email.value;
      const senha = elements.senha.value;

      // Criar usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );
      const user = userCredential.user;

      // Armazenar informações adicionais no Firestore
      const userDocRef = doc(collection(db, "users"), user.uid);
      await setDoc(userDocRef, {
        nome,
        sobrenome,
        cpf,
        telefone,
        email,
      });

      userSetInfo.setUserID(user.uid);
      userSetInfo.setUserEmail(user.email);
      userSetInfo.setUser(nome);
      userSetInfo.setUserLastName(sobrenome);

      closeModal();
    } catch (error) {
      console.error("Erro ao criar usuário:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sing-in-form">
      <div className="input-flex">
        <input type="text" name="nome" placeholder="Nome" required />
        <input type="text" name="sobrenome" placeholder="Sobrenome" required />
      </div>
      <div className="input-flex">
        <input type="text" name="cpf" placeholder="CPF" required />
        <input type="tel" name="telefone" placeholder="Telefone" required />
      </div>
      <input type="email" name="email" placeholder="E-mail" required />
      <div className="input-flex">
        <input type="password" name="senha" placeholder="Senha" required />
        <input type="password" placeholder="Confirmar senha" required />
      </div>

      <div className="input-space-between">
        <input type="submit" value="Realizar cadastro" />
        <button type="button" onClick={openModal}>
          Já tenho conta...
        </button>
      </div>
    </form>
  );
}

function LoginInputs({ openModal, closeModal, userInfo, userSetInfo }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { elements } = event.target;

    try {
      const email = elements.email.value;
      const senha = elements.senha.value;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );
      const user = userCredential.user;

      const userDocRef = doc(db, "users", user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();

        userSetInfo.setUserID(user.uid);
        userSetInfo.setUserEmail(user.email);
        userSetInfo.setUser(userData.nome);
        userSetInfo.setUserLastName(userData.sobrenome);

        console.log("Login bem-sucedido:", user.email);
        console.log(`Nome: ${userData.nome}, Sobrenome: ${userData.sobrenome}`);
      }

      elements.email.value = "";
      elements.senha.value = "";

      closeModal();
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sing-in-form">
      <input
        className="min-width-input"
        name="email"
        type="email"
        placeholder="E-mail"
        required
      />
      <input
        className="min-width-input"
        name="senha"
        type="password"
        placeholder="Senha"
        required
      />

      <div className="input-space-between">
        <input type="submit" value="Fazer Login" />
        <button type="button" onClick={openModal("signin")}>
          Sou novo por aqui...
        </button>
      </div>
    </form>
  );
}

export { SignInInputs, LoginInputs };
