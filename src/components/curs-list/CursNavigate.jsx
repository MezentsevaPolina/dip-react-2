import React from 'react';
import './curs-list.css'
import {Link} from "react-router-dom";

const CursNavigate = () => {

    return <>
        <div className="curs__navigation" id="navDiv">
            <Link to="/allclass" id="allCurs" >все курсы</Link>
            <Link to="/popclass" id="popCurs" >популярные</Link>
            <Link to="/freeclass" id="freeCurs" >бесплатно</Link>
        </div>
    </>
};
export default CursNavigate;