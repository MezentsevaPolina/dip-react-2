import React from 'react';
import './curs-list.css'
import {Link} from "react-router-dom";

const CursNavigate = () => {

    return <>
        <div className="curs__navigation" id="navDiv">
            <Link to="/allclass" id="allCurs" className="butlist">все курсы</Link>
            <Link to="/popclass" id="popCurs" className="butlist">популярные</Link>
            <Link to="/freeclass" id="freeCurs" className="butlist">бесплатно</Link>
        </div>
    </>
};
export default CursNavigate;