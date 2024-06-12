import React from "react";
import Menu from "./Menu";
import "./CSS/Global.css";

export default function Tabela({ dados }) {
	return (
		<div>
			<Menu />
			<h2>Acompanhamento das Informações de Irrigação</h2>
			<table className="custom-table">
				<thead>
					<tr>
						<th>Nome da Fazenda</th>
						<th>Número do Hidrante</th>
						<th>Número do Carretel</th>
						<th>Talhão</th>
						<th>Operador</th>
						<th>Tamanho do Talhão</th>
						<th>Data</th>
						<th>Hora</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{dados.map((item, index) => (
						<tr key={index}>
							<td>{item["Nome da Fazenda"]}</td>
							<td>{item["Número do Hidrante"]}</td>
							<td>{item["Número do Carretel"]}</td>
							<td>{item["Talhão"]}</td>
							<td>{item["Operador"]}</td>
							<td>{item["Tamanho do Talhão"]}</td>
							<td>{item["Data"]}</td>
							<td>{item["Hora"]}</td>
							<td>
								<div
									className={`status-square ${item.Status}`}
								/>
								{item.Status}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
