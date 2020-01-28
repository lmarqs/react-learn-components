import { lazy, useMemo } from 'react';

const useDynamicLookAndFeel = (name) => useMemo(() => {
    switch(name) {
        case 'other':
            return delayedLazy(() => import('../look-and-feel/other'));
        case 'original':
        default:
            return delayedLazy(() => import('../look-and-feel/original'));
    }
}, [name]);

const delayedLazy = (dynamicImport) => {
    return lazy(async () => {
        await delay();
        return dynamicImport();
    });
}

const delay = (amount = 2000) => new Promise(resolve => setTimeout(resolve, amount));

export default useDynamicLookAndFeel;
