import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { GiBookshelf } from 'react-icons/gi';
import { MdPermIdentity, MdNotifications } from 'react-icons/md';

import './Styles.css';

import ImgLogo from '../../../assets/images/oie_transparent (1).png';

import Perfil from '../Perfil/Perfil';

export default class NavPerfil extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <Link className="navbar-brand" to={'/'}>
                        <img src={ImgLogo} alt="Coração de Tinta" height="50" width="50" />
                    </Link>
                    <Link className="navbar-brand" to={'/perfil'}>
                        <MdPermIdentity size={30} color="#E02041" />
                    </Link>
                    <Link className="navbar-brand" to={'/'}>
                        <MdNotifications size={30} color="#E02041" />
                    </Link>
                    <Link className="navbar-brand" to={'/'}>
                        <GiBookshelf size={30} color="#E02041" />
                    </Link>
                    <form className="form-inline">
                        <input className="form form-control mr-sm-2" type="search" placeholder="Busque por título, autor, editora, ISBN..." aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>

                <Switch>
                    <Route path='/perfil' component={Perfil} />
                </Switch>
            </div>
        );
    }
}