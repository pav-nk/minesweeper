import React, { useEffect, useState } from 'react';

const ROWS_COUNT = 10;
const CELLS_COUNT = 10;

const getRandomNum = (num: number) => {
    // TODO доработать getRandomNum
    return Math.floor(Math.random() * (num + 1));
};

const getRandomCoord = (rowsCount: number, cellsCount: number): [number, number] => {
    // TODO проверка существует ли на поле -1 если нет сгенерировать еще раз
    return [getRandomNum(rowsCount), getRandomNum(cellsCount)];
};

export function Board() {
    const [board, setBoard] = useState<number[][]>([]);

    useEffect(() => {
        const cellsCount = ROWS_COUNT * CELLS_COUNT;
        const minesCount = Math.round(Math.log2(cellsCount));
        const boardNext = Array.from({ length: ROWS_COUNT }).map<number[]>(() =>
            Array.from<number>({ length: CELLS_COUNT }).fill(0),
        );

        for (let i = 0; i < minesCount; i += 1) {
            const [row, cell] = getRandomCoord(ROWS_COUNT, CELLS_COUNT);
            const boardNextRow = boardNext[row];
            if (boardNextRow) boardNextRow[cell] = -1;
        }

        console.log(boardNext);

        setBoard(boardNext);
    }, []);

    console.log(board);

    return <div></div>;
}

// TODO написать функцию которая посчитает на каждой ячейке количество мин вокруг нее.
