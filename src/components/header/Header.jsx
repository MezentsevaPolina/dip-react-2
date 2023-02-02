import React from 'react';
import Mainlogo from './logo.bmp';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return <>
        <div className="header">
            <div className="header__preview">
                <img className="header__logo" src={Mainlogo}/>
                <Link to="/" className="header__title">Lilac</Link>
            </div>
            <div className="header__navigation">
                <Link to="/login" className="butheader">Курсы</Link>
                <Link to="/login" className="butheader">Контакты</Link>
                <Link to="/login" className="butheader">Войти</Link>
            </div>
        </div>
    </>
};

export default Header;