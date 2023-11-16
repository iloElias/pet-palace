function SingInInputs(params) {
    return (
        <form className="sing-in-form">
            <div className="input-flex">
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Sobrenome" />
            </div>
            <div className="input-flex">
                <input type="date" placeholder="Data de nascimento" />
                <input type="tel" placeholder="Telefone" />
            </div>
            <input type="email" placeholder="E-mail" />
            <div className="input-flex">
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirmar senha" />
            </div>

            <div className="input-space-between">
                <input type="submit" value="Realizar cadastro" />
                <a href="/">Já tenho conta...</a>
            </div>
        </form>
    )
}

function LoginInputs(params) {
    return (
        <form className="sing-in-form">
            <input className="min-width-input" type="email" placeholder="E-mail" />
            <input className="min-width-input" type="password" placeholder="Senha" />

            <div className="input-space-between">
                <input type="submit" value="Fazer Login" />
                <a href="/">Sou novo por aqui...</a>
            </div>
        </form>
    )
}

export { SingInInputs, LoginInputs };