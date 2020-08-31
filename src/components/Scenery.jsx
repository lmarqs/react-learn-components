import React from 'react';
import Tower from './Tower';
import ButtonTogglePeriod from './ButtonTogglePeriod';
import { useIsNight } from 'is-night';

const Scenery = () => {
  const [isNight, setIsNight] = useIsNight()
  const toggleIsNight = () => setIsNight(!isNight)
  const sceneryClass = (isNight) ? "scenery is-night" : "scenery";
  return(
    <div className={sceneryClass}>
      <div className="container">
        <ButtonTogglePeriod
          onChangeEvent={ toggleIsNight } />
        <Tower isNight={ isNight } />
      </div>
      <div className="ground"></div>
    </div>
  )
}

export default Scenery
