import React from 'react';
import PropTypes from 'prop-types';

import { useIsNight } from 'hooks/useIsNight';

const Window = ({ closed }) => {
  const { isNight } = useIsNight();
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
