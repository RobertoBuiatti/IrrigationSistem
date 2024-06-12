// No componente App

import React, { useState } from "react"; // Importe o useState do React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CadastroUsuario from "./components/CadastroUsuario";
import InformacoesIrrigacao from "./components/InformacoesIrrigacao";
import Tabela from "./components/Tabela";
import AcompanhamentoTempoReal from "./components/AcompanhamentoTempoReal";
import "./App.css";

export default function App() {
	// Aqui você precisa garantir que os dados sejam passados para o componente Tabela
	const [dados, setDados] = useState([]); // Certifique-se de ter os dados disponíveis aqui

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cadastro" element={<CadastroUsuario />} />
				<Route
					path="/informacoesIrrigacao"
					element={<InformacoesIrrigacao setDados={setDados} />}
				/>
				<Route
					path="/Tabela"
					element={<Tabela dados={dados} />}
				/>
                <Route
                    path="/AcompanhamentoTempoReal"
                    element={<AcompanhamentoTempoReal dados={dados} atualizarDados={setDados} />}
                />
			</Routes>
		</Router>
	);
}
