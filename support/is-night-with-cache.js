import { useIsNight } from '../src/is-night';

export function useIsNightWithCache() {
    const [isNight, setIsNight] = useIsNight(JSON.parse(localStorage.getItem("isNight") || false));

    localStorage.setItem("isNight", isNight);

    return [isNight, setIsNight];
}