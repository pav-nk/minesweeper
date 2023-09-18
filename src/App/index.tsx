import React from 'react';
import { Cell } from 'Components/Cell';
import { Board } from 'Components/Board';

export function App() {
    require('./reset.styl');
    require('./index.styl');

    return (
        <>
            <div className="wrapper">
                <Board />
                <Cell
                    type="bomb"
                    state="opened"
                    onClick={console.log}
                    onRightClick={console.log}
                />
                <Cell
                    type={1}
                    state="opened"
                    onClick={console.log}
                    onRightClick={console.log}
                    content={1}
                />
                <Cell
                    type="empty"
                    state="opened"
                    onClick={console.log}
                    onRightClick={console.log}
                />
                <Cell
                    type="empty"
                    state="flagged"
                    onClick={console.log}
                    onRightClick={console.log}
                />
                <Cell
                    type="empty"
                    state="closed"
                    onClick={console.log}
                    onRightClick={console.log}
                />
                <Cell
                    type="bomb"
                    state="closed"
                    onClick={console.log}
                    onRightClick={console.log}
                />
                <Cell
                    type={1}
                    state="closed"
                    onClick={console.log}
                    onRightClick={console.log}
                />
            </div>
        </>
    );
}
