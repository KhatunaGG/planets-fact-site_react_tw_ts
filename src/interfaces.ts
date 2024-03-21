

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
    statuse?: string;
}

export type InfoPropsType = {
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    title1: string; 
    title2: string;
    title3: string;
    title4: string;
}

