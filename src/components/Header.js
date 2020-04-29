import React from 'react';
import './header.css'
import logo from '../img/treap-logo.png'

export default function Header(){
    return(
        <div className="header">
            <img className="logo" src={logo} alt="logo Treap" title="logo-treap"/>
        </div>
    )
}