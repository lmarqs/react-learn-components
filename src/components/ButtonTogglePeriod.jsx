import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Image from '../day-and-night.png';

const ButtonTogglePeriod = ({ onChangeEvent }) => {
  const [active, setActive] = useState();
  const onChange = () => {
    setActive(!active)
    onChangeEvent()
  }
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
