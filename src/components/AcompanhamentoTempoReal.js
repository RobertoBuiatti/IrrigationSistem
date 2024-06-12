import React from "react";
import Menu from "./Menu";
import "./CSS/Global.css";

export default function AcompanhamentoTempoReal({ dados }) {
    return (
        <div>
            <Menu />
            <h2>Acompanhamento das Informações de Irrigação</h2>
            <div>
                {dados.map((item, index) => (
                    <div key={index}>
                        <p>{`Nome da Fazenda: ${item["Nome da Fazenda"]}`}</p>
                        <p>{`Número do Hidrante: ${item["Número do Hidrante"]}`}</p>
                        <p>{`Número do Carretel: ${item["Número do Carretel"]}`}</p>
                        <p>{`Data: ${item["Data"]}`}</p>
                        <p>{`Hora: ${item["Hora"]}`}</p>
                        <p>{`Talhão: ${item["Talhão"]}`}</p>
                        <p>{`Operador: ${item["Operador"]}`}</p>
                        <p>{`Tamanho do Talhão: ${item["Tamanho do Talhão"]}`}</p>
                        <p>{`Status: ${item["Status"]}`}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}
