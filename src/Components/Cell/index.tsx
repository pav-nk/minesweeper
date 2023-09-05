import React from 'react';
import cn from 'classnames';

interface CellProperties {
    content?: number;
    type: number | 'bomb' | 'empty';
    state: 'closed' | 'opened' | 'flagged';
    onClick: () => void;
    onRightClick: () => void;
}

export function Cell({ type, state, content }: CellProperties) {
    require('./index.styl');
    const bombLogo: string = require('../../Assets/bomb.svg').default;
    const flagLogo: string = require('../../Assets/flag.svg').default;

    const isBomb: boolean = type === 'bomb';
    const isFlagged: boolean = state === 'flagged';
    const isOpened: boolean = state === 'opened';
    const isClosed: boolean = state === 'closed';

    const cellClass = cn('cell', {
        'cell--closed': isClosed,
        'cell--opened': isOpened,
        'cell--flagged': isFlagged,
        'cell--bomb': isBomb,
    });

    const renderLogo = () => {
        if (isBomb && isOpened) return <img src={bombLogo} alt="logo" />;
        if (isFlagged) return <img src={flagLogo} alt="logo" />;
        return null;
    };

    return (
        <button className={cellClass} type="button">
            {(isBomb || isFlagged) && renderLogo()}
            {content}
        </button>
    );
}
