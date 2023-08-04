import React from 'react';
require('./index.styl');
import logo from './assets/images/logo.png';

export function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="minesweeper" />
                    <h1 className="title">minesweeper</h1>
                </div>
                <div className="field">
                    <div className="row">
                        <div className="cell"></div>
                    </div>
                </div>
                <button className="btn">Reset game!</button>
            </div>
            <div className="footer"></div>
        </div>
    );
}
