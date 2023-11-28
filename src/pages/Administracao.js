import OptionCard from "../Components/OptionCard";
// import PopupTemplate from "../Components/PopupTemplate";

function Administracao({ params }) {

    return (
        <div className="administration-page">
            <OptionCard routeLink="/administracao/servicos" title={"Gerenciar serviços"} description={"Gerencie ou desativar os serviçoes oferecidos pela loja"} />
            <OptionCard routeLink="/administracao/cadastro/servicos" title={"Criar serviço"} description={"Crie novos serviços que serão oferecidos pela loja"} />
            <OptionCard routeLink={"/administracao/funcionarios"} title={"Gerenciar funcionarios"} description={"Configure permições entre os funcionarios, ou atribuir um lider de atividade"} />
            <OptionCard routeLink={"/administracao/cadastro/funcionarios"} title={"Cadastrar funcionarios"} description={"Cadastre novos funcionarios para a loja"} />
        </div>
    )
}

export default Administracao;