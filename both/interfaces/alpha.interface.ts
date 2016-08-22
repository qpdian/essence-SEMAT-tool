export interface Alpha {
    _id?: string;
    name: string;
    area: Area;
    alphaStates?: AlphaState[];
}

interface AlphaState {
    name: string;
}

interface Area {
    name: string;
    type: string;
}
