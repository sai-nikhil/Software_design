import {State} from '../config/state';
import {ShipmentDecorator} from './shipment-decorator';

@ShipmentDecorator
export class Shipment {
  readonly state: State;
  constructor(state: State) {
    this.state = state;
  }
  public getShipmentId(): string {
    return this.state.shipmentId.toString();
  }
  public ship(): string {
    return '';
  }
}