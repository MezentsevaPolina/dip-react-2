import React from 'react';
import './certificate.css';
import CertificateImage from "./example-certificate.jpg";

const Certificate = () => {

    return <>
        <div className="cert">
            <div className="cert__top">
                <a href="#" className="card__image">
                    <img
                        src={CertificateImage}
                    />
                </a>
                <div className="card__favor">
                    <div id="heart" className="download"></div>
                </div>
            </div>
            <div className="cert__bottom">
                <div className="cert__label">
                    Наименование сертификата
                    <button className="cert__open">В избранное</button>
                </div>
            </div>
        </div>
    </>
};
export default Certificate;