import React from 'react';

import useIsNight from 'hooks/useIsNight';

import Tower from './Tower';
import ButtonTogglePeriod from './ButtonTogglePeriod';

const Scenery = () => {
  const { isNight } = useIsNight();

  const sceneryClass = (isNight) ? "scenery is-night" : "scenery";
  return(
    <div className={sceneryClass}>
      <div className="container">
        <ButtonTogglePeriod />
        <Tower />
      </div>
      <div className="ground"></div>
    </div>
  )
}

export default Scenery
