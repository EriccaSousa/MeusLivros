import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";

import './App.css';

import Register from './components/Pages/Register/Register';
import Login from './components/Pages/Login/Login';

import Logo from './images/oie_transparent (1).png';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light bg-light">

            <Link to={'/login'} className="navbar-brand"><img src={Logo} height="50" width="50" alt="Coração de Tinta" /></Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/register'} className="nav-link"> <FiLogIn size={20} color="#e02041" /> Cadastre-se </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/login'} className="nav-link"> Login </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}