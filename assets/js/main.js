/***************************************************/
/**          Main JS by Reza Belounis             **/
/***************************************************/
import Highway from '@dogstudio/highway';
import Fade from './transition';
import CustomRenderer from './map';

/* Bonus transition effect */
const H = new Highway.Core({
    renderers: {
        contact: CustomRenderer
    },
    transitions: {
        default: Fade
    }
});