import {Element} from './element.interface';

export interface Alpha {
    _id?: string;
    name: string;
    area: Area;
    elementKernel: string;
    alphaStates?: AlphaState[];

}
interface AlphaState {
    name: string;
    code: string;
    next: string;
    back : string;
    checkpoints : Checkpoint;
}
interface Checkpoint{
    code:string;
    name:string;
}
interface Area {
    name: string;
    view: string;
}
