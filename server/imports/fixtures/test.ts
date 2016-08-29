import {Prueba1} from './test1';
export class Prueba {
    test1: Prueba1;
    name:string;
    constructor(){
        return this;
    }
    test(){
       return this.name = "hola";
    }
}