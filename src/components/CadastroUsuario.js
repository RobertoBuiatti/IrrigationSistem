import React, { useState } from "react";
import Menu from "./Menu"; // Importe o componente de menu
import "./CSS/Global.css";

export default function CadastroUsuario() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState(""); // Added for password confirmation

    const [cadastroConcluido, setCadastroConcluido] = useState(false); // Added for success message

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic form validation (can be enhanced)
        if (!nome || !email || !password || !confirmarPassword) {
            alert("Preencha todos os campos!");
            return;
        }

        if (password !== confirmarPassword) {
            alert("As senhas não conferem!");
            return;
        }

        // Save user data to local storage
        const userData = {
            nome,
            email,
            password
        };

        // Get existing users data from local storage
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Add new user data to existing users
        const updatedUsers = [...existingUsers, userData];

        // Update local storage with updated user data
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        // Set flag for successful registration
        setCadastroConcluido(true);

        // Clear form fields
        setNome("");
        setEmail("");
        setPassword("");
        setConfirmarPassword("");
    };

    return (
        <div>
            <Menu /> {/* Inclua o componente de menu */}
            <h2>Cadastro de Usuário</h2>
            {cadastroConcluido ? (
                <p className="success-message">
                    Cadastro realizado com sucesso!
                </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="confirmarPassword">Confirmar Senha:</label>
                    <input
                        type="password"
                        id="confirmarPassword"
                        name="confirmarPassword"
                        value={confirmarPassword}
                        onChange={(e) => setConfirmarPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Cadastrar</button>
                </form>
            )}
        </div>
    );
}
