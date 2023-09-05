import React from 'react';
import cn from 'classnames';

interface CellProperties {
    type: number | 'bomb' | 'empty';
    state: 'closed' | 'opened' | 'flagged';
    onClick: () => void;
    onRightClick: () => void;
}

export function Cell({ type, state }: CellProperties) {
    require('./index.styl');

    const cellClass = cn('cell', {
        'cell--closed': state === 'closed',
        'cell--opened': state === 'opened',
        'cell--flagged': state === 'flagged',
        'cell--bomb': type === 'bomb',
    });

    return <button className={cellClass} type="button" />;
}
