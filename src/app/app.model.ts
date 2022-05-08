export interface Job {
    company: 'Mid Ulster' | 'TJ Hamilton';
    model: string;
    regno: string;
    reqdate: Date;
    type: 'New' | 'Used';
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

 