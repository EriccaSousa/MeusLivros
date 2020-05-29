import React, { Component } from 'react';
import axios from 'axios';

import './Register.css';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = { nome: '', email: '', senha: '' };


        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }

    setNome(e) {
        this.setState({ nome: e.target.value });
    }

    setEmail(e) {
        this.setState({ email: e.target.value })
    }

    setSenha(e) {
        this.setState({ senha: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('Nome: ' + this.state.nome);
        console.log('Email: ' + this.state.email);
        console.log('Senha: ' + this.state.senha);

        const novoUsuario = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        };

        axios.post('http://localhost:3002/usuarios/register', novoUsuario)
            .then(
                (usuario) => {
                    console.log('Usuario inserido com sucesso.');
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );

        this.setState({ nome: "", email: "", senha: "" });
    }

    render() {
        return (
            <div className='containerBody float-right'>
                <form onSubmit={this.onSubmit}>
                    <h1>Cadastre-se</h1>

                    <input type="text" id="uname" placeholder="Digite o nome" name="uname" required
                        value={this.state.nome} onChange={this.setNome} />
                    <div className="valid-feedback">Válido.</div>
                    <div className="invalid-feedback">Por favor, preencha este campo.</div>

                    <input type="text" id="uname" placeholder="Digite o email" name="uname" required
                        value={this.state.email} onChange={this.setEmail} />
                    <div className="valid-feedback">Válido.</div>
                    <div className="invalid-feedback">Por favor, preencha este campo.</div>

                    <input type="password" id="pwd" placeholder="Digite a senha" name="pswd" required
                        value={this.state.senha} onChange={this.setSenha} />
                    <div className="valid-feedback">Válido.</div>
                    <div className="invalid-feedback">Por favor, preencha este campo.</div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}