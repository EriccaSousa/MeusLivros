import React, { Component } from 'react';
import axios from 'axios';

import logoImg from '../../../assets/images/oie_transparent.png';

import './styles.css';

export default class Cadastro extends Component {

    constructor(props) {
        super(props)

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
        this.setState({ email: e.target.value });
    }

    setSenha(e) {
        this.setState({ senha: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const novoUsuario = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        }

        axios.post('http://localhost:3002/usuarios/register', novoUsuario)
            .then(
                (res) => {
                    console.log('Usuário ' + res.data.email + ' inserido com sucesso.');
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )

        this.setState({ nome: '', email: '', senha: '' });
    }

    render() {
        return (
            <div className="container">
                <section className="form">
                    <img className="img-responsive" src={logoImg} alt="Coração de Tinta" />

                    <form action="/action_page.php" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Seu Nome"
                                value={this.state.nome} onChange={this.setNome} />

                            <input type="email" className="form-control" placeholder="Seu Email"
                                value={this.state.email} onChange={this.setEmail} />

                            <input type="password" className="form-control" placeholder="Sua Senha"
                                value={this.state.senha} onChange={this.setSenha} />
                        </div>
                        <button className="btn " type="submit">Finalizar</button>
                    </form>
                </section>
            </div>
        )
    }
}