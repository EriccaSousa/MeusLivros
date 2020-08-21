import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';

import NavInicial from './NavInicial/NavInicial';

export default class PagInicial extends Component {
    render(){
        return(
            <div className="container">
                <NavInicial/>
            </div>
        );
    }
}