import { Timestamp } from "@angular/fire/firestore";

export interface Job {
    id: string;
    company: string;
    model: string;
    regno: string;
    reqdate: Timestamp | undefined;
    reqtime: string;
    type: string;
    protection: string; 
    valet: string;
    completed: boolean;
    createdon: Timestamp | undefined;
    createdby: string;
    comment: string;
}

export const ValetTypes = [
    'Full Clean - handover',
    'Reclean - handover',
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

export const ProtectionKits = [
    'n/a',
    'Supagard',
    'LifeShine'
]

export const TimeOptions = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
];