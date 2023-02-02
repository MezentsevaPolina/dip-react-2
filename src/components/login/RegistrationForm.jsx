import React from 'react';
import './login.css';
import {Link} from "react-router-dom";
import Header from "../header/Header";

const LoginForm = () => {
    return <>
        <Header/>
        <p className="g_title">Регистрация</p>
        <p style={{color: "darkred", letterSpacing: "2px", textAlign: "center"}}>* - обязательные поля</p>
        <div className="login-form">
            <label>Фамилия: <input type="text"/> <font color="#8b0000">*</font></label> <br/>
            <label>Имя: <input type="text"/> <font color="#8b0000">*</font></label> <br/>
            <label>Email: <input type="text"/> <font color="#8b0000">*</font></label> <br/>
            <label>Логин: <input type="text"/> <font color="#8b0000">*</font></label> <br/>
            <label>Пароль: <input type="password"/> <font color="#8b0000">*</font></label> <br/>
            <label>Повторите пароль: <input type="text"/> <font color="#8b0000">*</font></label> <br/>
        </div>
        <p style={{textAlign: "center"}}><Link to="/" className="button__log">зарегистрироваться</Link></p>
    </>
};

export default LoginForm;