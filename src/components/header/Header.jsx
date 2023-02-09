import React from 'react';
import Mainlogo from './logo.bmp';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
    window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
            let myDropdown = document.getElementById("myDropdown");
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }
    }

    return <>
        <div className="header">
            <div className="header__preview">
                <img className="header__logo" src={Mainlogo}/>
                <Link to="/" className="header__title">Lilac</Link>
            </div>
            <div className="header__navigation">
                <div className="dropdown">
                    <button onClick={myFunction} className="dropbtn">Курсы</button>
                    <div className="dropdown-content" id="myDropdown">
                        <Link to="/">Визаж</Link><br/>
                        <Link to="/">Ногтевой сервис</Link><br/>
                        <Link to="/">Lashmaker</Link><br/>
                        <Link to="/">Browmaker</Link>
                    </div>
                </div>
                <Link to="/contacts" className="butheader">Контакты</Link>
                <Link to="/login" className="butheader">Войти</Link>
            </div>
        </div>
    </>
};

export default Header;