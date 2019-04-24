import React from 'react';
import PropTypes from 'prop-types';
import Apartment from './Apartment';

const Tower = ({ isNight }) => (
  <div className="tower">
    <div className="watter-supply"></div>
    <Apartment isNight={isNight} />
    <Apartment isNight={isNight} />
    <Apartment isNight={isNight} />
    <Apartment isNight={isNight} />
    <Apartment isNight={isNight} />
  </div>
)
Tower.propTypes = {
  isNight: PropTypes.bool
}

export default Tower
