import React from "react";
import { CellItem } from "./CellItem";

import { ICell } from '../types/ICell';

interface ICellListProps {
    items: ICell[]
};

const Field: React.FC<ICellListProps> = () => {
    return (<div />);
};

export { Field };