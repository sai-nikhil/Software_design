import { Consumable } from './Consumable';

export class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number;
  constructor(numberOfSlices: number, spoiled: boolean) {
    super('pizza', 0, 0, spoiled);
    this.numberOfSlices = numberOfSlices;
  }

  eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++
      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }
      return 'You eat a slice of the pizza'
    } else {
      return ''
    }
  }
}