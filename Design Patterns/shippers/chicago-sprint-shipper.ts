import {Shipper} from './shipper';
import {State} from '../config/state';
import {Letter} from '../assets/letter';
import {Package} from '../assets/package';
import {Oversize} from '../assets/oversize';
import {AssetInterface} from '../assets/asset-interface';

export class ChicagoSprintShipper extends Shipper {

  readonly asset: AssetInterface;

  constructor(state: State, asset: Letter | Package | Oversize) {
    super(state);
    this.asset = asset;
  }

  getCost(): string {
    if (this.asset instanceof Letter) {
      return `${this.state.weight * 0.42}`;
    }
    if (this.asset instanceof Package) {
      return `${this.state.weight * 0.2}`;
    }
    if (this.asset instanceof Letter) {
      return `No Charge`;
    }
  }
}
