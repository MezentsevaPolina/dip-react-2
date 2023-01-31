import React from 'react';
import Mainlogo from './logo.bmp'


const Header = () => {
    return <>
        <div className="header">
            <div className="header__preview">
                <img className="header__logo" src={Mainlogo}/>
                <p className="header__title">Daisy wheel</p>
            </div>
            <div className="header__navigation">
                <button className="butheader">Курсы</button>
                <button className="butheader">Контакты</button>
                <button className="butheader">Войти</button>
            </div>
        </div>
    </>
};

export default Header;