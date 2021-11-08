import {} from "../config/state";
import {Shipment} from "../shipment/shipment";

export class MockGui {
  public on(eventType: string, callback: (state: Shipment) => void) {}
  public trigger(eventType: string, state: Shipment) {}
}