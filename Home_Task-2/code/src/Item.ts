import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    private static numberOfItems: number;
    public id: number;
    public value: number;
    public name: string;
    public weight: number;

    protected constructor(name: string, value: number, weight: number) {
        if (Item.numberOfItems === undefined) {
            Item.numberOfItems = 0;
        } else {
            Item.numberOfItems++;
        }

        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    public compareTo(other: Item): number {
        if (this.value === other.value) {
            return this.name.toLowerCase().localeCompare(other.name.toLowerCase()) * -1;
        } else if (this.value > other.value) {
              return 1
        } else if (this.value < other.value) {
            return -1
        }
    }

    toString(): string {
        return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`
    }

    use(): void {}

    getId(): number {
        return this.id;
    }

    getValue(): number {
        return this.value;
    }

    getName(): string {
        return this.name;
    }

    getWeight(): number {
        return this.weight;
    }

    setValue(price: number): void {
        this.value = price;
    }

    setName(name: string): void {
        this.name = name;
    }

    setWeight(weight: number) {
        this.weight = weight;
    }

    reset(): void {
        Item.numberOfItems = undefined;
    }

}
