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

// TODO: написать функцию которая посчитает на каждой ячейке количество мин вокруг нее.

const STEPS_DICT = [
    [-1, -1],
    [-1, 0],
    [-1  1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1  1],
]

// 1 замутировать масссив board
// 2 пройтись по каждой клетке 
// 

// Можно расстановку мин и калькуляцию сделать гораздо проще и дешевле:
// 1) На поле расставляем нули
// 2) Запускаем цикл с расстановкой бомб
// 3) На каждом шаге цикла устанавливаем бомбу и сразу же вокруг нее все инкрементируем на 1. Только не забудь сделать проверку, если сосед -1, то инкрементировать его не надо. 
// Вуаля, йопт

// const getBoardWithNumValues = (board: number[][]): number[][] => {
//     const result: number[][] = [];
//     for (let row = 0; row < board.length; row += 1) {
//         const currentRow = board[row];
//         if (currentRow) {
//             for (let col = 0; col < currentRow.length; col += 1) {
//                 let currentValue = currentRow[col];

//                 if (currentValue === -1) {
//                     continue;
//                 }

//                 let minesCount = 0;

//                 for (const stepRow of [-1, 0, 1]) {
//                     for (const stepCol of [-1, 0, 1]) {
//                         const stepRowCurrent = board[row + stepRow];
//                         if (stepRowCurrent) {
//                             const colValue = stepRowCurrent[col + stepCol];
//                             if (colValue === undefined) continue;
//                             if (colValue === -1) {
//                                 minesCount += 1;
//                             }
//                         }
//                     }
//                 }

//                 currentRow[col] = minesCount;
//             }
//             result.push(currentRow);
//         }
//     }
//     return result;
// };

const addValuesAroundMine = (row: number, cell: number, board: number[][]) => {

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
