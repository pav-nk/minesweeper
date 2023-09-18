import React, { useEffect, useState } from 'react';

const ROWS_COUNT = 10;
const CELLS_COUNT = 10;

const getRandomNum = (num: number): number => {
    // TODO: доработать getRandomNum
    return Math.floor(Math.random() * (num + 1));
};

const getRandomCoord = (
    rowsCount: number,
    cellsCount: number,
    board: number[][],
): [number, number] => {
    // TODO: проверка существует ли на поле -1 если нет сгенерировать еще раз
    const newRandomCoord: [number, number] = [
        getRandomNum(rowsCount),
        getRandomNum(cellsCount),
    ];
    const [newRowsCoord, newCellsCoord] = newRandomCoord;
    const boardRow = board[newRowsCoord];
    if (boardRow) {
        if (boardRow[newCellsCoord] === -1)
            return getRandomCoord(ROWS_COUNT, CELLS_COUNT, board);
    }
    return newRandomCoord;
};

// TODO: написать функцию которая посчитает на каждой ячейке количество мин вокруг нее.
// const getRowWithNumValues = (row: number[], indexRow: number, board: number[][]): number[] => {
//     const cellTraversePath: number[][] = [
//         [-1, -1],
//         [0, -1],
//         [1, -1],
//         [-1, 1],
//         [0, 1],
//         [1, 1],
//         [-1, 0],
//         [1, 0],
//     ];
//     const result = row.map((cell, index) => {
//         const [rowCount, cellCount] = [indexRow, index];
//         const minesCol = cellTraversePath.map(([x, y]) => {
//             const cell =
//         })

//     })
// };

// const getBoardWithNumValues = (board: number[][]): number[][] => {
//     const result = board.map((row) => )

// };

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
            if (boardNextRow) boardNextRow[cell] = -1;
        }

        console.log(boardNext);

        setBoard(boardNext);
    }, []);

    console.log(board);

    return <div></div>;
}
