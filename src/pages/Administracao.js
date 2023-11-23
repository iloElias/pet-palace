import PopupTemplate from "../Components/PopupTemplate";

function Administracao(params) {

    return (
        <div className="administration-page">
            <PopupTemplate title={"Cadastro de serviço"}></PopupTemplate>
            <PopupTemplate title={"Cadastro de funcionario"}></PopupTemplate>
        </div>
    )
}

export default Administracao;