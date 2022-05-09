export interface Job {
    id: string;
    company: string;
    model: string;
    regno: string;
    reqdate: string;
    reqtime: string;
    type: string;
    valet: string;
    completed: boolean;
    createdon: string;
    createdby: string;
    comment: string;
}

export const ValetTypes = [
    'Full Clean',
    'Reclean',
    'Stock Clean'
]

export const CarTypes = [
    'New',
    'Used'
]

export const CompanyNames = [
    'Mid Ulster',
    'TJ Hamilton'
]

export const TimeOptions = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
];