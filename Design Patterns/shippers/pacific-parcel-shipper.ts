import {Shipper} from './shipper';
import {State} from '../config/state';
import {AssetInterface} from '../assets/asset-interface';
import {Letter} from '../assets/letter';
import {Package} from '../assets/package';
import {Oversize} from '../assets/oversize';

export class PacificParcelShipper extends Shipper {

  readonly asset: AssetInterface;

  constructor(state: State, asset: Letter | Package | Oversize) {
    super(state);
    this.asset = asset;
  }
  getCost(): string {
    if (this.asset instanceof Letter) {
      return `${this.state.weight * 0.51}`;
    }
    if (this.asset instanceof Package) {
      return `${this.state.weight * 0.19}`;
    }
    if (this.asset instanceof Letter) {
      return `${this.state.weight * 0.51 + this.state.weight * 0.02}`;
    }
  }
}
