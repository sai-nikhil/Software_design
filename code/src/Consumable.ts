// your code goes here
import { Item } from './Item';

export class Consumable extends Item {
  consumed: boolean = false;
  spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value,  weight);
    this.spoiled = spoiled;
  }

  eat(): string {
    return `You eat the ${this.name}`
  }

  use(): string {
    if (this.consumed) {
      return `There is nothing left of the ${this.name} to consume.`
    }
    if (this.spoiled && !this.consumed) {
      return `You eat the ${this.name}.\nYou feel sick.`
    }
    if (!this.spoiled && !this.consumed) {
      return this.eat();
    }
  }

  isConsumed(): boolean {
    return this.consumed;
  }

  setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  isSpoiled(): boolean {
    return this.spoiled;
  }

  toString(): string {
    return super.toString();
  }

}