import {CandyAvailability} from './enum/candy-availability.enum';

export class Candy {
  public id: string;
  public name: string;
  public brand: string;
  public price: bigint;
  public weight: number;
  public amount: number;
  public status: CandyAvailability;
}
