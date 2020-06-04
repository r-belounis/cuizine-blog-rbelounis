/***************************************************/
/**          Main JS by Reza Belounis             **/
/***************************************************/
import Highway from '@dogstudio/highway';
import Fade from './transition';

/* Bonus transition effect */
const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});