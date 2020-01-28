import React, { useReducer, useCallback, useMemo } from 'react';
import Tower from './Tower';
import ButtonTogglePeriod from './ButtonTogglePeriod';
import IsNightContext from '../contexts/IsNightContext';
import IsNightReducer, { INITIAL_STATE, TOGGLE_DAY_NIGHT } from '../reducers/IsNightReducer'

const Scenery = () => {
  const [{ isNight }, dispatch] = useReducer(IsNightReducer, INITIAL_STATE);
  const toggleIsNight = useCallback(() => dispatch({ type: TOGGLE_DAY_NIGHT }), [dispatch]);
  const isNightContextValue = useMemo(() => ({ isNight, toggleIsNight }), [isNight, toggleIsNight]);

  const sceneryClass = (isNight) ? "scenery is-night" : "scenery";
  return(
    <div className={sceneryClass}>
      <div className="container">
        <IsNightContext.Provider value={isNightContextValue}>
            <ButtonTogglePeriod />
            <Tower />
          </IsNightContext.Provider>
      </div>
      <div className="ground"></div>
    </div>
  )
}

export default Scenery
