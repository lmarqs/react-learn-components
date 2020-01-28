import React from 'react';
import PropTypes from 'prop-types';

import { useIsNight } from 'hooks/useIsNight';

import Image from '../day-and-night.png';

const ButtonTogglePeriod = () => {
  const { isNight: active, toggleIsNight: onChange } = useIsNight();
  
  const pos = (active) ? "active" : "";
  return (
    <button
      onClick={onChange}
      className={ "toggle-button floating " + pos }>
      <img src={Image} alt="Toggle day/night" width="32" height="32" />
    </button>
  )
}
ButtonTogglePeriod.propTypes = {
  onChangeEvent: PropTypes.func,
}

export default ButtonTogglePeriod
