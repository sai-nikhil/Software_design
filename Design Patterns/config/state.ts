let Id = 0;

export class State {
	public shipmentId: number;
  public toAddress: string;
  public toZipCode: string;
  public fromAddress: string;
  public fromZipCode: string;
  public weight: number;
  public marks: string[];

  constructor(fromAddress: string, fromZipCode: string, toAddress: string, toZipCode: string, weight: number, marks: string[]) {
    this.toZipCode = toZipCode;
    this.fromZipCode = fromZipCode;
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.marks = marks;
    this.weight = weight;
    this.shipmentId = Id++;
  }
}


export const state1: State = new State('From City 1', '123456', 'To City 2', '98765', 100, ['1', '2']);
export const state2: State = new State('From City 3', '654321', 'To City 4', '56789', 10, ['3', '4']);
