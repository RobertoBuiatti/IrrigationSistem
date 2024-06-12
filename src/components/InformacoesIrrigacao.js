import React, { useState } from "react";
import * as XLSX from "xlsx";
import Menu from "./Menu";
import Tabela from "./Tabela";
import "./CSS/Global.css";
import "./CSS/Table.css"; // Importe o arquivo CSS personalizado para estilizar a tabela

export default function InformacoesIrrigacao() {
	const [dados, setDados] = useState([]);
    
	const [nomeFazenda, setNomeFazenda] = useState("");
	const [numeroHidrante, setNumeroHidrante] = useState("");
	const [numeroCarretel, setNumeroCarretel] = useState("");
	const [data, setData] = useState("");
	const [hora, setHora] = useState("");
	const [talhao, setTalhao] = useState("");
	const [operador, setOperador] = useState("");
	const [tamanhoTalhao, setTamanhoTalhao] = useState("");
	const [status, setStatus] = useState("inicio");

	const handleSubmit = (event) => {
		event.preventDefault();

		// Get current date and time
		const currentDate = new Date();
		const day = String(currentDate.getDate()).padStart(2, "0");
		const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // January is 0!
		const year = currentDate.getFullYear().toString().slice(-2); // Getting last two digits of the year
		const formattedDate = `${day}-${month}-${year}`; // Format: DD-MM-YY

		const hours = String(currentDate.getHours()).padStart(2, "0");
		const minutes = String(currentDate.getMinutes()).padStart(2, "0");
		const seconds = String(currentDate.getSeconds()).padStart(2, "0");
		const formattedTime = `${hours}:${minutes}:${seconds}`; // Format: HH:MM:SS

		// Basic form validation
		if (
			!nomeFazenda ||
			!numeroHidrante ||
			!numeroCarretel ||
			!talhao ||
			!tamanhoTalhao ||
			!status
		) {
			alert("Preencha todos os campos!");
			return;
		}

		// Save irrigation data
		const irrigacaoData = {
			"Nome da Fazenda": nomeFazenda,
			"Número do Hidrante": numeroHidrante,
			"Número do Carretel": numeroCarretel,
			Data: formattedDate,
			Hora: formattedTime,
			Talhão: talhao,
			Operador: operador,
			"Tamanho do Talhão": tamanhoTalhao,
			Status: status,
		};

		// Add irrigation data to existing data
		const updatedData = [...dados, irrigacaoData];

		// Update state with updated data
		setDados(updatedData);

		// Clear form fields
		setNomeFazenda("");
		setNumeroHidrante("");
		setNumeroCarretel("");
		setData("");
		setHora("");
		setTalhao("");
		setOperador("");
		setTamanhoTalhao("");
		setStatus("inicio");
	};

	const exportToExcel = () => {
		const worksheet = XLSX.utils.json_to_sheet(dados);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(
			workbook,
			worksheet,
			"Informações de Irrigação"
		);
		XLSX.writeFile(workbook, "informacoes_irrigacao.xlsx");
	};

	return (
		<div>
			<Menu /> {/* Renderiza o componente de menu */}
			<h2>Informações de Irrigação</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="nomeFazenda">Nome da Fazenda:</label>
				<input
					type="text"
					id="nomeFazenda"
					value={nomeFazenda}
					onChange={(e) => setNomeFazenda(e.target.value)}
					required
				/>
				<label htmlFor="numeroHidrante">Número do Hidrante:</label>
				<input
					type="text"
					id="numeroHidrante"
					value={numeroHidrante}
					onChange={(e) => setNumeroHidrante(e.target.value)}
					required
				/>
				<label htmlFor="numeroCarretel">Número do Carretel:</label>
				<input
					type="text"
					id="numeroCarretel"
					value={numeroCarretel}
					onChange={(e) => setNumeroCarretel(e.target.value)}
					required
				/>
				<label htmlFor="talhao">Talhão:</label>
				<input
					type="text"
					id="talhao"
					value={talhao}
					onChange={(e) => setTalhao(e.target.value)}
					required
				/>
				<label htmlFor="operador">Operador:</label>
				<input
					type="text"
					id="operador"
					value={operador}
					onChange={(e) => setOperador(e.target.value)}
				/>
				<label htmlFor="tamanhoTalhao">Tamanho do Talhão:</label>
				<input
					type="text"
					id="tamanhoTalhao"
					value={tamanhoTalhao}
					onChange={(e) => setTamanhoTalhao(e.target.value)}
				/>

				<label htmlFor="data">Data:</label>
				<input
					type="date"
					id="data"
					value={data}
					onChange={(e) => setData(e.target.value)}
				/>
				<label htmlFor="hora">Hora:</label>
				<input
					type="time"
					id="hora"
					value={hora}
					onChange={(e) => setHora(e.target.value)}
				/>
				<label htmlFor="status">Status:</label>
				<select
					id="status"
					value={status}
					onChange={(e) => setStatus(e.target.value)}
					required
				>
					<option value="inicio">Inicio</option>
					<option value="espera">Espera</option>
					<option value="batido">Batido</option>
				</select>
				<button type="submit">Salvar na Tabela</button>
			</form>
			{dados.length > 0 && (
				<button onClick={exportToExcel}>Exportar para Excel</button>
			)}
			<Tabela dados={dados} />
		</div>
	);
}
