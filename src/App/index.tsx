import React from 'react';
require('./index.styl');

export function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="logo">
                    <img src="" alt="minesweeper" />
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
