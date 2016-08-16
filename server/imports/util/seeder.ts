import { Factory }   from './factory';
export class Seeder {
  private n:number;
  private type :any;
  public constructor( n: number, type: any) {
    type = Factory.get("Party");
  }
  public seed(){


  }
}
