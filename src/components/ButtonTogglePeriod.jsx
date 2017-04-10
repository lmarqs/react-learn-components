import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toogleDayNight } from '../actions/AppActions';

import Image from '../day-and-night.png';

const ButtonTogglePeriod = ({ isNight, toogleDayNight }) => {
  const pos = (isNight) ? "active" : "";
  return (
    <button
      onClick={toogleDayNight}
      className={ "toggle-button floating " + pos }>
      <img src={Image} alt="Toggle day/night" width="32" height="32" />
    </button>
  )
}
ButtonTogglePeriod.propTypes = {
  isNight: PropTypes.bool,
  toogleDayNight: PropTypes.func,
}

export const mapStateToProps = ({ app }) => {
  const { isNight } = app
  return { isNight }
}

export default connect(mapStateToProps, { toogleDayNight })(ButtonTogglePeriod)
