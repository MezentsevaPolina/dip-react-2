import React from 'react';

import Header from "./components/header/Header";
import ManeBody from "./components/mane-body/ManeBody";
import CursListAll from "./components/curs-list/CursListAll";
import CursListPop from "./components/curs-list/CursListPop";
import CursListFree from "./components/curs-list/CursListFree";

function MainPage() {
    return <>
        <div>
            <Header/>
            <ManeBody/>

        </div>
    </>;
}

export default MainPage;