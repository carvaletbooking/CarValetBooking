export interface Job {
    company: 'Mid Ulster' | 'TJ Hamilton';
    model: string;
    regno: string;
    reqdate: Date;
    type: 'New' | 'Used';
    valet: 'Full Clean' | 'Reclean' | 'Stock Clean';
    completed: boolean;
    createdon: Date;
    createdby: string;
    comment: string;
}