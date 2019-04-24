import React, { useReducer } from 'react';
import Tower from './Tower';
import ButtonTogglePeriod from './ButtonTogglePeriod';
import IsNightContext from '../contexts/IsNightContext';
import IsNightReducer, { INITIAL_STATE, TOGGLE_DAY_NIGHT } from '../reducers/IsNightReducer'

const Scenery = () => {
  const [{ isNight }, dispatch] = useReducer(IsNightReducer, INITIAL_STATE)
  const toggleIsNight = () => dispatch({ type: TOGGLE_DAY_NIGHT })
  const sceneryClass = (isNight) ? "scenery is-night" : "scenery";
  return(
    <div className={sceneryClass}>
      <div className="container">
        <ButtonTogglePeriod
          onChangeEvent={ toggleIsNight } />
          <IsNightContext.Provider value={isNight}>
            <Tower />
          </IsNightContext.Provider>
      </div>
      <div className="ground"></div>
    </div>
  )
}

export default Scenery
