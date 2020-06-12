import React from 'react';
import './header.css'
import logo from '../img/treap-logo.png'
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div className="header">
            <Link to='/'><img className="logo" src={logo} alt="logo Treap" title="logo-treap"/></Link>
        </div>
    )
}