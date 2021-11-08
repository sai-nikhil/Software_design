import {state1, state2} from './config/state';
import {Shipment} from './shipment/shipment';

const shipment1 = new Shipment(state1);
console.log(shipment1.ship());
const shipment2 = new Shipment(state2);
console.log(shipment2.ship());