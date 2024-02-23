import React from 'react'
import Ad from '../assets/advertisement.jpg';
import './NewsTab.css';

export default function NewsTab() {
    return (
        <>
            <div className="top-section">
                <div className="logo position-relative">
                    <div className="sub-title position-absolute">news, blog & magazine</div>
                    <div className="main-title position-absolute">NexusNews</div>
                </div>
                <div className="ad-container position-relative z-0">
                    <img className="advertisement postition-absolute" src={Ad} alt={Ad}/>
                    <button type="button" className="adbtn btn btn-dark position-absolute btn-lg">Learn More</button>
                </div>
            </div>
        </>
    );
}
