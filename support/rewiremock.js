import rewiremock from 'rewiremock/webpack';

import { useIsNightWithCache } from './is-night-with-cache';

rewiremock('./src/is-night').with({ useIsNight: useIsNightWithCache });

if (window.location.search.includes('enable-rewiremock')) {
  rewiremock.enable();
}
