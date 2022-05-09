export interface Job {
    id: string;
    company: CompanyNames;
    model: string;
    regno: string;
    reqdate: Date;
    type: CarTypes;
    valet: ValetTypes;
    completed: boolean;
    createdon: Date;
    createdby: string;
    comment: string;
}

export enum ValetTypes {
    FullClean = 'Full Clean',
    Reclean = 'Reclean',
    StockClean = 'Stock Clean'
}

export enum CarTypes {
    New = 'New',
    Used = 'Used'
}

export enum CompanyNames {
    MidUlster = 'Mid Ulster',
    TjHamilton = 'TJ Hamilton'
}