
function SingInInputs(params) {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const openModal = () => {
        params.openModal("login");
    }

    return (
        <form onSubmit={handleSubmit} className="sing-in-form">
            <div className="input-flex">
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Sobrenome" />
            </div>
            <div className="input-flex">
                <input type="text" placeholder="CPF" />
                <input type="tel" placeholder="Telefone" />
            </div>
            <input type="email" placeholder="E-mail" />
            <div className="input-flex">
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirmar senha" />
            </div>

            <div className="input-space-between">
                <input type="submit" value="Realizar cadastro" />
                <button onClick={openModal}>Já tenho conta...</button>
            </div>
        </form>
    )
}

function LoginInputs(params) {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const openModal = () => {
        params.openModal("signin");
    }

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