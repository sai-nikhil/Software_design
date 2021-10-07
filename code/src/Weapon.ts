// your code goes here
import { Item } from './Item';

export abstract class Weapon extends Item{

  public static MODIFIER_CHANGE_RATE: number = 0.05
  baseDamage: number = 0;
  damageModifier: number = 0;
  baseDurability: number = 0;
  durabilityModifier: number = 0;

  protected constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getDurability(): number {
    return this.baseDurability + this.durabilityModifier > 0 ? this.baseDurability + this.durabilityModifier : 0;
  }

  toString(): string {
    return `${this.name} − Value: ${this.value}, Weight : ${this.weight} , Damage : ${this.getDamage()} , Durability : ${this.getDurability()}`
  }

  use() {
    if (this.getDurability() < 0) {
      return `You can't use the ${this.name} , it is broken.`
    }
    this.baseDurability -= Weapon.MODIFIER_CHANGE_RATE;
    const durability = this.getDurability();
    if (durability > 0) {
      return `You use the ${this.name} , dealing ${this.getDamage()} points of damage.`
    } else {
      return `You use the ${this.name} , dealing ${this.getDamage()} points of damage . The hammer breaks.`
    }
  }

  polish(): void {}

}