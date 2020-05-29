import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, BrowserRouter } from "react-router-dom";

import './Login.css';
import logoImg from '../../../images/oie_transparent.png';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = { email: '', senha: '' };

        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }

    setEmail(e) {
        this.setState({ email: e.target.value })
    }

    setSenha(e) {
        this.setState({ senha: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('Email: ' + this.state.email);

        const usuarioLogin = {
            email: this.state.email,
            senha: this.state.senha
        };

        axios.post('http://localhost:3002/usuarios/authenticate', usuarioLogin)
            .then(
                (usuario) => {
                    console.log('Bem vindo  ' + usuario.data.nome + ' !');
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );

        this.setState({ email: "", senha: "" });
    }

    render() {
        return (
            <BrowserRouter>
                <div className='containerBody float-right'>
                    <form onSubmit={this.onSubmit}>
                        <div className="logo">
                            <img src={logoImg} alt="Coração de Tinta" />
                        </div>

                        <input type="text" name="email" placeholder="Seu email" required
                            value={this.state.email} onChange={this.setEmail} />
                        <div className="invalid-feedback">Por favor, preencha este campo.</div>


                        <input type="password" name="senha" placeholder="Sua senha" required
                            value={this.state.senha} onChange={this.setSenha} />
                        <div className="invalid-feedback">Por favor, preencha este campo.</div>


                        <Link to="/" className="back-link1">Esqueceu sua senha?</Link>

                        <button className="button" type="submit">Entrar</button>
                    </form>
                </div>
            </BrowserRouter>
        );
    }
}
