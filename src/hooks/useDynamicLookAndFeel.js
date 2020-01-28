import { lazy, useMemo } from 'react';

const useDynamicLookAndFeel = (name = 'original') => useMemo(() => {
    switch(name) {
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
