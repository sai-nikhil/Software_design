// your code goes here
import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class Inventory {

  items: Item[];

  sort(comparator?: ItemComparator): void {
    if (comparator) {
      this.items = this.items.sort((i1, i2) => {
        return comparator.compare(i2, i1)
      });
    } else {
      this.items = this.items.sort((i1, i2) => {
        return i2.compareTo(i1)
      });
    }
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  toString(): string {
    return this.items.map((i) => i.toString()).join(',');
  }

}