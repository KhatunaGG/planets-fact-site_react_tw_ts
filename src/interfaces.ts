

export interface IData {
    name: string;
    overview: {
        content: string;
        source: string;
    };
    structure: {
        content: string;
        source: string;
    };
    geology: {
        content: string;
        source: string;
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
        planet: string;
        internal: string;
        geology: string;
    };
}



export interface IBtnData {
    id: number;
    name: string;
};


export type ButtonsProps = {
    getOverview: (pageName: string, itemname: string) => void;
    pageName: string;
    activeBtn: string;
    btnName: string;
    id: number;
}
