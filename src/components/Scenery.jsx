import React, { useState } from 'react';
import Tower from './Tower';
import ButtonTogglePeriod from './ButtonTogglePeriod';

const Scenery = () => {
  const [isNight, setIsNight] = useState()
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
