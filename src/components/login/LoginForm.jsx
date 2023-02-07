import React from 'react';
import './login.css';
import {Link} from "react-router-dom";
import Header from "../header/Header";

const LoginForm = () => {
    return <>
        <Header/>
        <p className="g_title">Вход</p>
        <p className="g_title2">войдите в систему или <Link to="/registration" className="registration" style={{}}>Загеристрируйтесь!</Link>
        </p>
        <div className="login-form">
            <label>Логин:</label> <input type="text" /><br/>
            <label>Пароль:</label> <input type="password" /><br/>
        </div>
        <p style={{textAlign: "center"}}><Link to="/user" className="button__log">войти</Link></p>
    </>
};

export default LoginForm;