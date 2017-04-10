import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Window from './Window';

const Apartment = ({ isNight }) => {
  const [isWindowsClosed, setWindowClosed] = useState()
  const toggleWindowClosed = () => setWindowClosed(!isWindowsClosed)
  return (
    <div className="apartment" onClick={toggleWindowClosed}>
      <Window closed={ isWindowsClosed } />
      <Window closed={ isWindowsClosed } />
    </div>
  )
}
Apartment.propTypes = {
  lightsOn: PropTypes.bool,
  isNight: PropTypes.bool
}

export default Apartment
