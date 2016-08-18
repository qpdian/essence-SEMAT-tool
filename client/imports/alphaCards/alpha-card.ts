export class AlphaCard {
    id: number;
    name: string;
    alphaStates: string[];
    area: string
    constructor(id: number, name: string, area: string) {
        this.id = id;
        this.name = name;
        this.alphaStates = [];
        this.area = area;
    }
    addAlphaState(value: string) {
        this.alphaStates.push(value);
    }

}