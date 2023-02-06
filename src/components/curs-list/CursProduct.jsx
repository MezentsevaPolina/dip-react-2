import React from 'react';
import './curs-list.css'
import ProductImage from "./example.jpg";
import Fav from "./fav.jpg";
import Fav2 from "./fav2.jpg"

const CursProduct = () => {
    function favor() {
        const hurt = document.getElementById('hurt');
        hurt.src = Fav2;
    }
    return <>
        <div className="card">
            <div className="card__top">
                <a href="#" className="card__image">
                    <img
                        src={ProductImage}
                    />
                </a>
                    <img id="hurt"
                        className="card__favor" src={Fav}
                        onClick={favor}
                    />

                <div className="card__label">Название курса cfeabjkbkjabcjkbab hahdbah</div>
            </div>
            <div className="card__bottom">
                Краткое описание ljfwsjvjks jkshdjs hsijhsdjbv afhkhgoejhrpo fjkvjwsbh ghuregheruj uhgiughur
                <div className="card__prices">
                    <div className="card__price card__price--common">Длительность - </div>
                    <div className="card__price card__price--discount">100 лет</div>
                </div>
                <button className="card__add">В избранное</button>
                <button className="card__add">Записаться</button>
            </div>
        </div>
    </>
};
export default CursProduct;