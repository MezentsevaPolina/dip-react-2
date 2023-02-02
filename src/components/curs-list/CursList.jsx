import React from 'react';
import './curs-list.css'

const CursList = () => {

    // Выбираем кнопку
    const btn = document.getElementById("allCurs");
    const div_navigate = document.getElementById("navDiv")
// Отслеживаем щелчок по кнопке
    btn.addEventListener('click', function() {
        // Затем переключаем (добавляем/удаляем) класс .butlist__act для div
        div_navigate.classList.toggle('butlist__act');
    });

    return <>
        <div className="curs__navigation" id="navDiv">
            <button id="allCurs" className="butlist">все курсы</button>
            <button id="popCurs" className="butlist">популярные</button>
            <button id="freeCurs" className="butlist">бесплатно</button>
        </div>
        <div style={{height: "100%"}}>

        </div>
    </>
};

export default CursList;