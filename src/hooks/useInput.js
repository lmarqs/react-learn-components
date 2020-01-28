

import { useState, useCallback, useMemo } from 'react';

const useInput = () => {
    const [value, setValue] = useState();
    const onChange = useCallback(e => setValue(e.target.value), [setValue]);
    return useMemo(() => ({ value, onChange }), [value, onChange]);
};

export default useInput;
