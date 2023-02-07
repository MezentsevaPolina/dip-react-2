import React from 'react';
import './curs-list.css'
import ProductImage from "./example.jpg";
import Fav from "./fav.jpg";
import Fav2 from "./fav2.jpg"
import {Link} from "react-router-dom";

const CursProduct = () => {
    const heartClick = function() {
        document.getElementById("heart").classList.toggle("heart__active");
    };

    return <>
        <div className="card">
            <div className="card__top">
                <a href="#" className="card__image">
                    <img
                        src={ProductImage}
                    />
                </a>
                <div className="card__favor">
                    <div id="heart" className="heart"></div>
                </div>

                <Link to="/cursform" className="card__label">Название курса cfeabjkbkjabcjkbab hahdbah</Link>
            </div>
            <div className="card__bottom">
                Краткое описание ljfwsjvjks jkshdjs hsijhsdjbv afhkhgoejhrpo fjkvjwsbh ghuregheruj uhgiughur
                <div className="card__prices">
                    <label className="card__price--common">Длительность - <label className="card__price--discount">6 месяцев</label></label><br/>
                    <div className="card__price--common">Стоимость - <label className="card__price--discount">3000р в месяц</label></div>
                </div>
                <button className="card__add" onClick={heartClick}>В избранное</button>
            </div>
        </div>
    </>
};
export default CursProduct;