import React, { useState } from "react";
import Menu from "./Menu";
import { Navigate } from "react-router-dom"; // Importe o componente de menu
import "./CSS/Global.css";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToIrrigacao, setRedirectToIrrigacao] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic form validation
        if (!email || !password) {
            alert("Preencha todos os campos!");
            return;
        }

        // Get existing users data from local storage
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Find user with matching email and password
        const user = existingUsers.find(user => user.email === email && user.password === password);

        if (user) {
            // Set redirectToIrrigacao to true to trigger the redirect
            setRedirectToIrrigacao(true);
        } else {
            alert("Credenciais inválidas!"); // Se as credenciais não corresponderem a nenhum usuário existente, exiba uma mensagem de erro
        }

        // Limpar os campos após o envio
        setEmail("");
        setPassword("");
    };

    // Redirect to InformacoesIrrigacao if redirectToIrrigacao is true
    if (redirectToIrrigacao) {
        return <Navigate to="/informacoesIrrigacao" />;
    }

    return (
        <div>
            <Menu /> {/* Remover depois*/}
            <h1>Bem-vindo ao COI - Centro de Operações de Irrigação</h1>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}
