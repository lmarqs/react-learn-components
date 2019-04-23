import React from 'react';
import PropTypes from 'prop-types';

const Window = (props) => {
  let classState = "window";
  if(props.closed)
    classState += " closed";

  if(props.lightOn)
    classState += " light-on"

  return <div className={ classState }></div>
}

Window.propTypes = {
  closed: PropTypes.bool,
  lightOn: PropTypes.bool
}

export default Window;
