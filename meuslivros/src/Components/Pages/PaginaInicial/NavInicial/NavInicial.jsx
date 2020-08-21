import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import logoImg from '../../../../assets/images/oie_transparent (1).png';

import Home from '../Home/Home';
import Cadastro from '../Cadastro/Cadastro';
import Login from '../Login/Login';

export default class NavInicial extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <Link to={"/"}><img className="img-responsive navbar-brand" src={logoImg} height="50" width="45" alt="Coração de Tinta" /></Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id='collapsibleNavbar'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to={'/'} className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/login'} className='nav-link'>Login</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/register'} className='nav-link'>Cadastro</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/register' component={Cadastro} />
                    <Route path='/login' component={Login} />
                </Switch>
            </Router>
        )
    }
}