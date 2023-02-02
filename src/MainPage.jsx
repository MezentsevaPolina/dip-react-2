import React from 'react';

import Header from "./components/header/Header";
import ManeBody from "./components/mane-body/ManeBody";
import CursList from "./components/curs-list/CursList";

function MainPage() {
    return <>
        <div>
            <Header/>
            <ManeBody/>
            <CursList/>
        </div>
    </>;
}

export default MainPage;