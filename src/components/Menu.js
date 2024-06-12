// src/components/Menu.js
import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Menu.css";
import AcompanhamentoTempoReal from './AcompanhamentoTempoReal';

export default function Menu() {
    return (
        <nav className="menu">
            <div className="menu-icon">&#9776;</div> {/* Ícone de três barras */}
            <ul className="menu-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cadastro">Cadastro</Link>
                </li>
                <li>
                    <Link to="/informacoesIrrigacao">Informações de Irrigação</Link>
                </li>
                <li>
                    <Link to="/AcompanhamentoTempoReal">Acompanhamento</Link>
                </li>
            </ul>
        </nav>
    );
}
