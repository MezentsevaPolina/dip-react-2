import React from 'react';
import Header from "../header/Header";
import './cont.css';
import '../login/login.css';
import '../user/user.css';


const Contacts = () => {

    function Results() {
        document.getElementById("show").classList.toggle("guide-show");
    }

    return <>
        <Header/>
        <div className="contact_title">Наши контакты</div>
        <div className="radius"></div>
        <div className="contact_title2">
            <label style={{fontWeight: "bold"}}>Разработка: </label><a href="https://github.com/MezentsevaPolina">Mezentseva Polina (github)</a><br/>
            <label style={{fontWeight: "bold"}}>Администрация: </label><a>+7 (ххх) ххх хх хх,</a> <a>(el.pochta@gmail.com)</a><br/>
            <label style={{fontWeight: "bold"}}>Модерация: </label><a>+7 (ххх) ххх хх хх,</a> <a>(el.pochta@gmail.com)</a><br/>
            <label style={{fontWeight: "bold"}}>VK: </label><a href="">ссыка на несозданную группу</a> <br/>
            <label style={{fontWeight: "bold"}}>Telegram: </label><a href="">ссылка на несозданный канал</a> <br/>
            <button onClick={Results} id="dangeon_master" className="button__log">Хочу стать мастером!</button><br/>
            <div className="guide" id="show">
                Отправь свою анкету, пока непонятно какую, на почту администратора (el.pochta@gmail.com) <br/>
                и прими участие в онлайн-собеседовании. Хрен знает, нужно ли оно, анкеты достаточно
            </div>
        </div>

    </>
};

export default Contacts;