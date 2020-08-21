import React, { Component } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, Switch, Route } from 'react-router-dom';

import './styles.css';

import logoImg from '../../../../assets/images/oie_transparent.png';

import Cadastro from '../Cadastro/Cadastro';

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <section className="form">
                    <img className="img-responsive" src={logoImg} alt="Coração de Tinta" />

                    <form action="/action_page.php">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Seu Email" />
                            <input type="password" className="form-control" placeholder="Sua Senha" />
                        </div>
                        <button className="btn " type="submit">Entrar</button>

                        <Link to={'/register'}>
                            <FiLogIn size={20} color="#E02041" />
                            Não tenho cadastro
                        </Link>
                    </form>
                </section>

                <Switch>
                    <Route path='/register' component={Cadastro} />
                </Switch>
            </div>
        )
    }
}