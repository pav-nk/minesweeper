import React, { useEffect, useState } from 'react';

const ROWS_COUNT = 10;
const CELLS_COUNT = 10;

const getRandomNum = (num: number): number => {
    // TODO: доработать getRandomNum
    return Math.floor(Math.random() * num);
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

const getBoardWithNumValues = (board: number[][]): number[][] => {
    const result: number[][] = [];
    for (let row = 0; row < board.length; row += 1) {
        const currentRow = board[row];
        if (currentRow) {
            for (let col = 0; col < currentRow.length; col += 1) {
                let currentValue = currentRow[col];

                if (currentValue === -1) {
                    continue;
                }

                let minesCount = 0;

                for (const stepRow of [-1, 0, 1]) {
                    for (const stepCol of [-1, 0, 1]) {
                        const stepRowCurrent = board[row + stepRow];
                        if (stepRowCurrent) {
                            const colValue = stepRowCurrent[col + stepCol];
                            if (colValue === undefined) continue;
                            if (colValue === -1) {
                                minesCount += 1;
                            }
                        }
                    }
                }

                currentRow[col] = minesCount;
            }
            result.push(currentRow);
        }
    }
    return result;
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
            if (boardNextRow) boardNextRow[cell] = -1;
        }

        console.log(boardNext);

        const boardWithNumValues: number[][] = getBoardWithNumValues(boardNext);

        console.log(boardWithNumValues);

        setBoard(boardWithNumValues);
    }, []);

    console.log(board);

    return <div></div>;
}
