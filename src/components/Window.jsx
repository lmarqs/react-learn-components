import React from 'react';
import PropTypes from 'prop-types';

const Window = ({ closed, lightOn }) => {
  let classState = "window";
  if(closed)
    classState += " closed";

  if(lightOn)
    classState += " light-on"

  return <div className={ classState }></div>
}
Window.propTypes = {
  closed: PropTypes.bool,
  lightOn: PropTypes.bool
}

export default Window;
