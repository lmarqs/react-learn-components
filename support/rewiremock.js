import rewiremock from 'rewiremock/webpack';

import React from 'react';

import { useStateWithLog } from "./use-state-with-log"
import { useIsNightWithCache } from './is-night-with-cache';

rewiremock('./src/is-night').with({ useIsNight: useIsNightWithCache });
rewiremock('./node_modules/react/index.js')
  .withDefault(React)
  .with({ ...React, useState: useStateWithLog });

if (window.location.search.includes('enable-rewiremock')) {
  rewiremock.enable();
}
