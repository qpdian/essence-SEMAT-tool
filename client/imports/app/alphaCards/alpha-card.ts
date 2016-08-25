export class AlphaCard {
    id: number;
    name: string;
    alphaStates: string[];
    private _area: string
    constructor(id: number, name: string, area: string) {
        this.id = id;
        this.name = name;
        this.alphaStates = [];
        this.area = area;
    }
    public get area(){
        return this._area;
    }
    public set area(area:string){
        this._area = area;
    }
    addAlphaState(value: string) {
        this.alphaStates.push(value);
        
    }

}