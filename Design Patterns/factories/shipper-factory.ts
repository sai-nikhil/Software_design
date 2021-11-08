import {AirEastShipper} from '../shippers/air-east-shipper';
import {ChicagoSprintShipper} from '../shippers/chicago-sprint-shipper';
import {PacificParcelShipper} from '../shippers/pacific-parcel-shipper';
import {InstanceFactoryInterface} from './instance-factory-interface';

export class ShipperFactory implements InstanceFactoryInterface {

  public getInstance(zipCode: string) {
    const firstNumber: number = +zipCode[0];
    if (!firstNumber || firstNumber < 0) {
      return AirEastShipper;
    }

    switch (firstNumber) {
      case 1:
      case 2:
      case 3: {
        return AirEastShipper;
      }
      case 4:
      case 5:
      case 6: {
        return ChicagoSprintShipper;
      }
      case 7:
      case 8:
      case 9: {
        return PacificParcelShipper;
      }
      default: {
        return AirEastShipper;
      }
    }
  }

}