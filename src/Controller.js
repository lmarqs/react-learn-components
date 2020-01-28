import React, { useReducer, useCallback, useMemo } from 'react';

import IsNightContext from 'contexts/IsNightContext';
import IsNightReducer, { INITIAL_STATE, TOGGLE_DAY_NIGHT } from 'reducers/IsNightReducer';
import LookAndFeelRender from 'LookAndFeelRender';

const Controller = () => {
    const [{ isNight }, dispatch] = useReducer(IsNightReducer, INITIAL_STATE);
    const toggleIsNight = useCallback(() => dispatch({ type: TOGGLE_DAY_NIGHT }), [dispatch]);
    const isNightContextValue = useMemo(() => ({ isNight, toggleIsNight }), [isNight, toggleIsNight]);
   
    return (
        <IsNightContext.Provider value={isNightContextValue}>
            <LookAndFeelRender />
        </IsNightContext.Provider>
    );
}

export default Controller