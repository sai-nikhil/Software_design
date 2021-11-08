import {InstanceFactoryInterface} from './instance-factory-interface';
import {Letter} from '../assets/letter';
import {Package} from '../assets/package';
import {Oversize} from '../assets/oversize';

export class AssetFactory implements InstanceFactoryInterface {
  getInstance(weight: number) {
    if (weight <= 0) {
      console.log('invalid weight.');
      return null;
    }
    if (weight <= 16) {
      return Letter;
    } else if (weight <= 160) {
      return Package;
    } else if (weight > 160) {
      return Oversize;
    }
  }
}