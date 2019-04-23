import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IsNightContext from '../contexts/IsNightContext'

const Window = ({ closed }) => {
  const isNight = useContext(IsNightContext);
  let classState = "window";
  if(closed)
    classState += " closed";

  if(isNight)
    classState += " light-on"

  return <div className={ classState }></div>
}
Window.propTypes = {
  closed: PropTypes.bool,
}

export default Window;
