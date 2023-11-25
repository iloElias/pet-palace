import OptionCard from "../Components/OptionCard";
// import PopupTemplate from "../Components/PopupTemplate";

function Administracao({params}) {

    return (
        <div className="administration-page">
            <OptionCard routeLink="/administracao/servicos" title={"Gerenciar tarefas"} description={"Gerencie os horarios e serviçoes agendados, atividades que estão pendentes, ou desativar serviços"}/>
            <OptionCard routeLink={"/administracao/funcionarios"} title={"Gerenciar funcionarios"} description={"Configure permições entre os funcionarios, ou atribuir um lider de atividade"}/>
            <OptionCard title={"Gerenciar loja"} description={"Gerencie configurações da loja, mude a cara da sua loja"}/>
            <OptionCard routeLink="/administracao/servicos" title={"Gerenciar tarefas"} description={"Gerencie os horarios e serviçoes agendados, atividades que estão pendentes, ou desativar serviços"}/>
            <OptionCard routeLink="/administracao/servicos" title={"Gerenciar tarefas"} description={"Gerencie os horarios e serviçoes agendados, atividades que estão pendentes, ou desativar serviços"}/>

        </div>
    )
}

export default Administracao;