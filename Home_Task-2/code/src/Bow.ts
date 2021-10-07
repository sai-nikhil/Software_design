// your code goes here
import { Weapon } from './Weapon';

export class Bow extends Weapon {

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('bow', baseDamage, baseDurability, value, weight);
  }

  polish() :void {
    const maxDurabilityModifier = 1;
    if (this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE > maxDurabilityModifier) {
      this.durabilityModifier = maxDurabilityModifier;
    } else {
      this.durabilityModifier += Weapon.MODIFIER_CHANGE_RATE;
    }
  }
}