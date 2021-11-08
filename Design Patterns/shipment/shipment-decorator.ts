import {ShipperFactory} from '../factories/shipper-factory';
import {AssetFactory} from '../factories/asset-factory';

export function ShipmentDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {

  return class extends constructor {
    state: any;
    ship() {

      const Asset = new AssetFactory().getInstance(this.state.weight);
      const Shipper = new ShipperFactory().getInstance(this.state.fromZipCode);

      if (!Asset) {
        return 'invalidAsset'
      }

      const asset = new Asset();
      const shipper = new Shipper(this.state, asset);

      const messageFirstPart: string = `Shipment with the ID ${this.state.shipmentId.toString()} will be picked up from ${this.state.fromZipCode} ${this.state.fromAddress} 
      and shipped to ${this.state.toZipCode} ${this.state.toAddress} `;
      const messageSecondPart = `\n Cost: ${shipper.getCost()}$`;

      return messageFirstPart + messageSecondPart;
    }
  };
}