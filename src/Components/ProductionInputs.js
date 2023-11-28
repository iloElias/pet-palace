import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ServicesInputs({ initialData, onSubmit, action }) {
    const [servicesName, setServicesName] = useState("");
    const [servicesDescription, setServicesDescription] = useState("");
    const [expectedTime, setExpectedTime] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        // Preencher os campos com os dados existentes como placeholders
        if (initialData) {
            setServicesName(initialData.servicesName || "");
            setServicesDescription(initialData.servicesDescription || "");
            setExpectedTime(initialData.expectedTime || "");
            setPrice(initialData.price || "");
        }
    }, [initialData]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedService = {
            servicesName,
            servicesDescription,
            expectedTime,
            price,
        };

        onSubmit(updatedService);
    };

    return (
        <form onSubmit={handleSubmit} className="create-form">
            <input
                type="text"
                placeholder="Título da atividade"
                value={servicesName}
                onChange={(e) => setServicesName(e.target.value)}
                required
            />
            <textarea
                name="descricao"
                placeholder="Descrição do serviço"
                value={servicesDescription}
                onChange={(e) => setServicesDescription(e.target.value)}
                rows={5}
                required
            ></textarea>
            <input
                type="time"
                value={expectedTime}
                onChange={(e) => setExpectedTime(e.target.value)}
                placeholder="Duração estimada"
                required
            />
            <input
                type="number"
                value={price}
                step="0.01"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Preço"
                required
            />
            <div className="input-space-between">
                {
                    (
                        (action === "edit") ?
                            <input type="submit" value="Editar Serviço" /> :
                            <>
                                <input type="submit" value="Adicionar Serviço" />
                                <Link to={"/administracao/servicos"}>Voltar para serviços</Link>
                            </>
                    )
                }
            </div>
        </form>
    );
}

function EmployeesInputs({ initialData, onSubmit, action }) {
    const [employeeName, setEmployeeName] = useState("");
    const [employeePosition, setEmployeePosition] = useState("");
    const [employeeSpecialty, setEmployeeSpecialty] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [employeePhoneNumber, setEmployeePhoneNumber] = useState("");
    const [employeeAddress, setEmployeeAddress] = useState("");

    useEffect(() => {
        if (initialData) {
            setEmployeeName(initialData.employeeName || "");
            setEmployeePosition(initialData.employeePosition || "");
            setEmployeeSpecialty(initialData.employeeSpecialty || "");
            setEmployeeEmail(initialData.employeeEmail || "");
            setEmployeePhoneNumber(initialData.employeePhoneNumber || "");
            setEmployeeAddress(initialData.employeeAddress || "");
        }
    }, [initialData]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedEmployee = {
            employeeName,
            employeePosition,
            employeeSpecialty,
            employeeEmail,
            employeePhoneNumber,
            employeeAddress,
        };

        onSubmit(updatedEmployee);
    };

    return (
        <form onSubmit={handleSubmit} className="create-form">
            <input
                type="text"
                placeholder="Nome do funcionário"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Cargo"
                value={employeePosition}
                onChange={(e) => setEmployeePosition(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Especialidade"
                value={employeeSpecialty}
                onChange={(e) => setEmployeeSpecialty(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="E-mail"
                value={employeeEmail}
                onChange={(e) => setEmployeeEmail(e.target.value)}
                required
            />
            <input
                type="tel"
                placeholder="Número de telefone"
                value={employeePhoneNumber}
                onChange={(e) => setEmployeePhoneNumber(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Endereço"
                value={employeeAddress}
                onChange={(e) => setEmployeeAddress(e.target.value)}
                required
            />
            <div className="input-space-between">
                {
                    (
                        action === "edit" ?
                            <input type="submit" value="Editar Funcionário" /> :
                            <>
                                <input type="submit" value="Cadastrar Funcionário" /> :
                                <Link to={"/administracao/funcionarios"}>Voltar para funcionários</Link>
                            </>
                    )
                }
            </div>
        </form>
    );
}

export { ServicesInputs, EmployeesInputs };
