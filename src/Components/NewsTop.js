import React from 'react'
import Ad from '../assets/advertisement.jpg';
import './NewsTop.css';

export default function NewsTop() {

    function goToFlightAd() {
        window.open("https://www.westjet.com/en-ca/deals?s_cid=GOOGLE:sem-wj:Brand+-+Core:::::Core+Branded&gad_source=1&gclid=CjwKCAiAivGuBhBEEiwAWiFmYTAvQ0P2_Iw_eKh0JMVs7yNetxBT70srlNDeGyTRbP4vaoOnWpqcjhoCwCEQAvD_BwE&gclsrc=aw.ds#ss-wj");
    }

    return (
        <>
            <div className="top-section">
                <div className="logo position-relative">
                    <div className="sub-title position-absolute">news, blog & magazine</div>
                    <div className="main-title position-absolute">NexusNews</div>
                </div>
                <div className="ad-container position-relative z-0">
                    <img className="advertisement postition-absolute" src={Ad} alt={Ad}/>
                    <div className="center-text position-absolute">
                        <h2 className="traveltxt">FLY AWAY</h2>
                        <p className="flighttxt1">HOLIDAY <span className="flighttxt2">WITH US</span></p>
                    </div>
                    <button type="button" className="adbtn btn btn-dark position-absolute btn-lg" onClick={goToFlightAd}>Learn More</button>
                </div>
            </div>
        </>
    );
}
