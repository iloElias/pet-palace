import { auth, createUserWithEmailAndPassword } from "../firebase";

function SingInInputs({ openModal, userInfo, userSetInfo }) {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const { elements } = event.target;
        const nome = elements.nome.value;
        const sobrenome = elements.sobrenome.value;
        const cpf = elements.cpf.value;
        const telefone = elements.telefone.value;
        const email = elements.email.value;
        const senha = elements.senha.value;

        userSetInfo.setUser(nome);
        userSetInfo.setUserLastName(sobrenome);
        userSetInfo.setUserCPF(cpf);
        userSetInfo.setUserTel(telefone);
        userSetInfo.setUserEmail(email);
        userSetInfo.setUserPassword(senha);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
 
            userSetInfo({
              uid: user.uid,
              email: user.email,
            //   nome: user.nome,
            //   sobrenome: user.sobrenome,
            //   telefone: user.telefone,
            //   cpf: user.cpf,
            });
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

function LoginInputs({ params, openModal, userInfo, userSetInfo }) {
    const handleSubmit = (event) => {
        event.preventDefault();


    };

    return (
        <form onSubmit={handleSubmit} className="sing-in-form">
            <input className="min-width-input" type="email" placeholder="E-mail" />
            <input className="min-width-input" type="password" placeholder="Senha" />

            <div className="input-space-between">
                <input type="submit" value="Fazer Login" />
                <button onClick={openModal}>Sou novo por aqui...</button>
            </div>
        </form>
    )
}

export { SingInInputs, LoginInputs };