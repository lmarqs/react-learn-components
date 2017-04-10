import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tower from './Tower';
import ButtonTogglePeriod from './ButtonTogglePeriod';

const Scenery = ({ isNight }) => {
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
Scenery.propTypes = {
  isNight: PropTypes.bool
}

export const mapStateToProps = ({ app }) => {
  const { isNight } = app;
  return { isNight };
}

export default connect(mapStateToProps)(Scenery)
