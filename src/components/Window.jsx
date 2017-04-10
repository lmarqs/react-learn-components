import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Window = ({ closed, isNight }) => {
  let classState = "window";
  if(closed)
    classState += " closed";

  if(isNight)
    classState += " light-on"

  return <div className={ classState }></div>
}
Window.propTypes = {
  closed: PropTypes.bool,
  isNight: PropTypes.bool.isRequired,
}

export const mapStateToProps = ({ app }) => {
  const { isNight } = app;
  return { isNight };
}

export default connect(mapStateToProps)(Window);
