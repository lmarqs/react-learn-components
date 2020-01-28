import React from 'react';

import useIsNight from 'hooks/useIsNight';

const Scenery = () => {
  const { isNight, toggleIsNight } = useIsNight();

  return (
    <div>
      <button onClick={toggleIsNight}>Toggle</button>
      <br />
      <dl>
        <dd>isNight:</dd>
        <dd>{ isNight.toString() }</dd>
      </dl>
    </div>
  )
}

export default Scenery
