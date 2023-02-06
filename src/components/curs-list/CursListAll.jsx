import React from 'react';
import './curs-list.css';
import CursNavigate from "./CursNavigate";
import MainPage from "../../MainPage";
import CursProduct from "./CursProduct";
import CursProduct2test from "./CursProduct2test";

const CursListAll = () => {

    return <>
        <MainPage/>
        <CursNavigate/>
        <div className="cards">
            <CursProduct/>
            <CursProduct2test/>
            <CursProduct/>
            <CursProduct/>
            <CursProduct/>
            <CursProduct/>
            <CursProduct/>
            <CursProduct/>
            <CursProduct/>
            <CursProduct/>
            <CursProduct/>
        </div>

    </>
};

export default CursListAll;