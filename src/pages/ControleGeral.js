// import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import PopupTemplate from "../Components/PopupTemplate";
import { ServicesInputs, EmployeesInputs } from "../Components/ProductionInputs"

function CadastroServicos({ params }) {
    return (
        <div className="div-servicos">
            <PopupTemplate title={"Cadastro de serviço"}>
                <ServicesInputs />
            </PopupTemplate>
        </div>
    )
}

function CadastroFuncionarios({ params }) {
    return (
        <div className="div-servicos">
            <PopupTemplate title={"Cadastro de funcionário"}>
                <EmployeesInputs />
            </PopupTemplate>
        </div>
    )
}

function GerenciarServicos() {
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const servicesCollection = collection(db, "services");
                const servicesSnapshot = await getDocs(servicesCollection);

                const servicesData = servicesSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setServicesList(servicesData);
            } catch (error) {
                console.error("Erro ao buscar serviços:", error.message);
            }
        };

        fetchServices();
    }, []);

    const handleDeleteService = async (id) => {
        try {
            const serviceDocRef = doc(db, "services", id);
            await deleteDoc(serviceDocRef);
            setServicesList((prevList) => prevList.filter((service) => service.id !== id));
        } catch (error) {
            console.error("Erro ao excluir serviço:", error.message);
        }
    };

    // Adicione a funcionalidade de edição, se necessário

    return (
        <div className="div-servicos">
            <div className="servicos-container">
                <div className="container-title">
                    <h2>Gerenciar Serviços</h2>
                    <Link to={"/administracao/cadastro/servicos"}>Cadastrar serviço</Link>
                </div>
                <ul className="ul-list">
                    {servicesList.map((service) => (
                        <div className="item-container" key={service.id}>
                            <strong>{service.servicesName}</strong>
                            <p>{service.servicesDescription}</p>
                            <p>Duração Estimada: {service.expectedTime}</p>
                            <p>Preço: {service.price}</p>
                            <div className="buttons-container">
                                <button className="button" onClick={() => handleDeleteService(service.id)}>Excluir</button>
                            </div>
                            {/* Adicione um botão para a funcionalidade de edição aqui */}
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function GerenciarFuncionarios() {
    const [employeesList, setEmployeesList] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const employeesCollection = collection(db, "employees");
                const employeesSnapshot = await getDocs(employeesCollection);

                const employeesData = employeesSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setEmployeesList(employeesData);
            } catch (error) {
                console.error("Erro ao buscar funcionários:", error.message);
            }
        };

        fetchEmployees();
    }, []);

    const handleDeleteEmployee = async (id) => {
        try {
            const employeeDocRef = doc(db, "employees", id);
            await deleteDoc(employeeDocRef);
            setEmployeesList((prevList) => prevList.filter((employee) => employee.id !== id));
        } catch (error) {
            console.error("Erro ao excluir funcionário:", error.message);
        }
    };

    // Adicione a funcionalidade de edição, se necessário

    return (
        <div className="div-servicos">
            <div className="servicos-container">
                <div>
                    <h2>Gerenciar Funcionários</h2>
                    <Link to={"/administracao/cadastro/funcionarios"}>Cadastrar serviço</Link>
                </div>
                <ul className="ul-list">
                    {employeesList.map((employee) => (
                        <div className="item-container" key={employee.id}>
                            <strong>{employee.employeeName}</strong>
                            <p>Cargo: {employee.employeePosition}</p>
                            <p>Especialidade: {employee.employeeSpecialty}</p>
                            <p>E-mail: {employee.employeeEmail}</p>
                            <p>Número de Telefone: {employee.employeePhoneNumber}</p>
                            <p>Endereço: {employee.employeeAddress}</p>
                            <div className="buttons-container">
                                <button className="button" onClick={() => handleDeleteEmployee(employee.id)}>Excluir</button>
                            </div>
                            {/* Adicione um botão para a funcionalidade de edição aqui */}
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export { CadastroServicos, CadastroFuncionarios, GerenciarServicos, GerenciarFuncionarios };