import React, { Suspense } from 'react';

import useInput from 'hooks/useInput';
import useDynamicLookAndFeel from 'hooks/useDynamicLookAndFeel';

const LookAndFeelRender = () => {
    const lookAndFeelNameInput = useInput();
    const LookAndFeel = useDynamicLookAndFeel(lookAndFeelNameInput.value);

    return (
        <>
            <select {...lookAndFeelNameInput}>
                <option value="original">Original</option>
                <option value="enhanced">Melhorado</option>
            </select>
            <Suspense fallback={<div>Loading...</div>}>
                <LookAndFeel />
            </Suspense>
        </>
    );
}

export default LookAndFeelRender