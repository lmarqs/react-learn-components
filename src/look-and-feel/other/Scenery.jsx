import React from 'react';

import useIsNight from 'hooks/useIsNight';

import sun from './sun.jpg';
import moon from './moon.jpg';

const style = {
  height: "100%",
};

const Scenery = () => {
  const { isNight, toggleIsNight } = useIsNight();

  return (
    <div style={{ ...style, backgroundImage: `url(${isNight ? moon : sun})` }} onClick={toggleIsNight} />
  )
}

export default Scenery
