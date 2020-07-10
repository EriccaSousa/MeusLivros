import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import './styles.css';

import logoImg from '../../../assets/images/oie_transparent (1).png';

import Home from '../Home/Home';
import Cadastro from '../Cadastro/Cadastro';
import Login from '../Login/Login';

export default class NavInicial extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={"/"}><img className="img-responsive" src={logoImg} alt="Coração de Tinta" /></Link>
                        <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                            <ul className='navbar-nav mr-auto'>
                                <li>
                                    <Link to={'/'} className='nav-link'>Home</Link>
                                </li>
                                <li>
                                    <Link to={'/login'} className='nav-link'>Login</Link>
                                </li>
                                <li>
                                    <Link to={'/register'} className='nav-link'>Cadastro</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/register' component={Cadastro} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </div>
            </Router>
        )
    }
}