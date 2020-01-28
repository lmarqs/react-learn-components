import { useContext } from 'react';
import IsNightContext from '../contexts/IsNightContext';

export const useIsNight = () => {
    return useContext(IsNightContext);
}

export default useIsNight