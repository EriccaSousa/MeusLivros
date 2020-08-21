import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import './styles.css';
import imgPerfil from '../../../assets/images/perfil.jpg'

import LivrosLidos from '../AbaLivrosLidos/LivrosLidos';

export default class Perfil extends Component {
    render() {
        return (
            <div className="container clearfix">
                <div className="perfilInfo float-left p-3 my-3  shadow-sm p-4 mb-4 bg-white">
                    <div className="foto" >
                        <img className="img-responsive" src={imgPerfil} alt="Perfil" />
                    </div>
                    <div className="info"><br />
                        <h2>Érica Sousa</h2>
                        <h6>Quixeramobim - CE</h6>
                    </div>
                </div>

                <div className="corpo container">
                    <nav className="navbar dados my-3 d-flex justify-content-around mb-3 shadow-sm p-2 bg-white">
                        <Link to={'/lidos'}><div className="p-4  bg-light"> 4 Lidos</div></Link>
                        <Link to={'/'}><div className="p-4  bg-light"> 1 Lendo</div></Link>
                        <Link to={'/'}><div className="p-4  bg-light"> 4 Troco</div></Link>
                    </nav>
                </div>

                <Switch>
                    <Route path='/lidos' component={LivrosLidos} />
                </Switch>
            </div>
        );
    }
}