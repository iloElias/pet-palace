import { useState } from "react";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

function ServicesInputs() {
    const [servicesName, setservicesName] = useState("");
    const [servicesDescription, setservicesDescription] = useState("");
    const [expectedTime, setExpectedTime] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const servicesDocRef = doc(collection(db, "services"));
            await setDoc(servicesDocRef, {
                servicesName,
                servicesDescription,
                expectedTime,
                price
            });

            setservicesName("");
            setservicesDescription("");
            setExpectedTime("");
            setPrice("");

            alert("Tarefa adicionada com sucesso ao banco de dados!");
        } catch (error) {
            console.error("Erro ao adicionar tarefa ao banco de dados:", error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="create-form">
                <input type="text" placeholder="Título da atividade" value={servicesName} onChange={(e) => setservicesName(e.target.value)} required />
                <textarea name="descricao" placeholder="Descrição do serviço" value={servicesDescription} onChange={(e) => setservicesDescription(e.target.value)} rows={5} required></textarea>
                <input type="time" value={expectedTime} onChange={(e) => setExpectedTime(e.target.value)} placeholder="Duração estimada" required />
                <input type="number" value={price} step="0.01" onChange={(e) => setPrice(e.target.value)} placeholder="Preço" required />
                <div className="input-space-between">
                    <input type="submit" value="Adicionar Tarefa" />
                    <Link to={"/administracao/servicos"}>Voltar para tarefas</Link>
                </div>
            </form>
        </>
    );
}

function EmployeesInputs() {
    const [employeeName, setEmployeeName] = useState("");
    const [employeePosition, setEmployeePosition] = useState("");
    const [employeeSpecialty, setEmployeeSpecialty] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [employeePhoneNumber, setEmployeePhoneNumber] = useState("");
    const [employeeAddress, setEmployeeAddress] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const employeesDocRef = doc(collection(db, "employees"));
            await setDoc(employeesDocRef, {
                employeeName,
                employeePosition,
                employeeSpecialty,
                employeeEmail,
                employeePhoneNumber,
                employeeAddress,
            });

            setEmployeeName("");
            setEmployeePosition("");
            setEmployeeSpecialty("");
            setEmployeeEmail("");
            setEmployeePhoneNumber("");
            setEmployeeAddress("");

            alert("Funcionário cadastrado com sucesso no banco de dados!");
        } catch (error) {
            console.error("Erro ao cadastrar funcionário no banco de dados:", error.message);
        }
    };

    return (
        <>
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
                    <input type="submit" value="Cadastrar Funcionário" />
                    <Link to={"/administracao/funcionarios"}>Voltar para funcionarios</Link>
                </div>
            </form>
        </>
    );
}


export { ServicesInputs, EmployeesInputs };
