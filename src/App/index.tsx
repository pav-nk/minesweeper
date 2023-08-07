import React from 'react';
require('./index.styl');
import logo from './assets/images/logo.png';
// import { ICell } from './types/ICell';
import { Field } from './components/Field';


const App: React.FC = () => {
    const [field, setField] = React.useState(false);

    const generateNewField = () => {
        setField(() => true);
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="minesweeper" />
                    <h1 className="title">minesweeper</h1>
                </div>
                {field && <Field />}
                <button className="btn" onClick={() => generateNewField()}>Generate a field</button>
            </div>
            <div className="footer"></div>
        </div>
    );
};

export { App };
