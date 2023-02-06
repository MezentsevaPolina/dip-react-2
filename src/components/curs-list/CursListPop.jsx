import React from 'react';
import './curs-list.css';
import CursNavigate from "./CursNavigate";
import MainPage from "../../MainPage";
import CursProduct from "./CursProduct";

const CursListPop = () => {

    return <>
        <MainPage/>
        <CursNavigate/>
        <div className="cards">
            <CursProduct/>
            <CursProduct/>
            <CursProduct/>
            <CursProduct/>
        </div>

    </>
};

export default CursListPop;