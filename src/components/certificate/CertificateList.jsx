import React from 'react';
import './certificate.css';
import Header from "../header/Header";
import Certificate from "./Certificate";
import {Link} from "react-router-dom";

const CertificateList = () => {

    return <>
        <Header/>
        <div className="title__div">
            <Link to="/user" className="back">Назад</Link><a className="user__title">Мои сертификаты</a>
        </div>
        <div className="circle"></div>
        <div className="certs">
            <Certificate/>
            <Certificate/>
            <Certificate/>
            <Certificate/>
        </div>

    </>
};
export default CertificateList;