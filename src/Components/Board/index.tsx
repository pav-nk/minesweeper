import React, { useEffect, useState } from 'react';

const ROWS_COUNT = 10;
const CELLS_COUNT = 10;

const getRandomNum = (num: number): number => {
    return Math.floor(Math.random() * num);
};

const generateCoord = (rowsCount: number, cellsCount: number): [number, number] => [
    getRandomNum(rowsCount),
    getRandomNum(cellsCount),
];

const getRandomCoord = (
    rowsCount: number,
    cellsCount: number,
    board: number[][],
): [number, number] => {
    let [row, cell] = generateCoord(rowsCount, cellsCount);

    while (board[row]?.[cell] === -1) {
        [row, cell] = generateCoord(rowsCount, cellsCount);
    }

    return [row, cell];
};

const addValuesAroundMine = (row: number, col: number, board: number[][]) => {
    const STEPS_DICT: [number, number][] = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];
    STEPS_DICT.forEach((step: [number, number]) => {
        const [rowStep, colStep] = step;
        if (rowStep !== undefined) {
            const boardRow = board[rowStep + row];
            if (boardRow) {
                if (boardRow[colStep + col] !== undefined) {
                    if (boardRow[colStep + col] !== -1) {
                        boardRow[colStep + col] += 1;
                    }
                }
            }
        }
    });
};

export function Board() {
    require('./index.styl');
    const [board, setBoard] = useState<number[][]>([]);

    useEffect(() => {
        const cellsCount = ROWS_COUNT * CELLS_COUNT;
        const minesCount = Math.round(Math.log2(cellsCount));
        const boardNext = Array.from({ length: ROWS_COUNT }).map<number[]>(() =>
            Array.from<number>({ length: CELLS_COUNT }).fill(0),
        );

        for (let i = 0; i < minesCount; i += 1) {
            const [row, cell] = getRandomCoord(ROWS_COUNT, CELLS_COUNT, boardNext);
            const boardNextRow = boardNext[row];
            if (boardNextRow) {
                boardNextRow[cell] = -1;
                addValuesAroundMine(row, cell, boardNext);
            }
        }

        console.log(boardNext);

        setBoard(boardNext);
    }, []);

    console.log(board);

    return <div></div>;
}
