import React from 'react';
import Header from "../header/Header";
import "./user.css";
import Avatar from "./avatartest.bmp"
import {Link} from "react-router-dom";
import '../contacts/cont.css';
import '../login/login.css';

const UserForm = () => {
    function saveData() {
        alert("Поздравляем! Данные не сохранены!");
    }

    return <>
        <Header/>
        <div className="title__div">
            <a className="user__title">Личный кабинет</a>
        </div>
        <div className="fio__div">
            <img className="avatar" src={Avatar}/><a>Фамилия Имя</a>
        </div>
        <div className="radius"></div>
        <div className="describe__data">
            <label>Фамилия</label><br/>
            <input type="text"/><br/>
            <label>Имя</label><br/>
            <input type="text"/><br/>
            <label>Дата рождения</label><br/>
            <input type="text"/><br/>
            <label>Телефон</label><br/>
            <input type="text"/><br/>
            <label>Город</label><br/>
            <input type="text"/><br/>
            <div>
                <input type="radio" name="rb" id="rb1" checked/> <label htmlFor="rb1">Женский</label>
            </div>

            <div>
                <input type="radio" name="rb" id="rb2"/> <label htmlFor="rb2">Мужской</label>
            </div>

            <button onClick={saveData} className="button__log">сохранить</button>
        </div>
        <div className="describe">
            <a className="contact_title">О себе</a><br/>
            <a className="contact_title2">Данные в Вашем профиле видны только Вам и мастеру.<br/>Вносите корректные данные, они будут отображаться в сертификате.</a>
        </div>
        <div className="menu">
            <p className="menu__btn"><Link to="/" >Текущие курсы</Link></p><br/>
            <p className="menu__btn"><Link to="/" >Избранные курсы</Link></p><br/>
            <p className="menu__btn"><Link to="/certificates" >Сертификаты</Link></p><br/>
            <p className="menu__btn"><Link to="/" >Все вебинары</Link></p><br/>
            <p className="menu__btn"><Link to="/" >Чек-листы</Link></p><br/>
            <p className="menu__btn"><Link to="/" >Мои курсы</Link></p><br/>
        </div>
    </>
};

export default UserForm;