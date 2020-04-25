export interface Location {
    type: string;
    coordinates: number[];
}

export interface RelatedSource {
    application: string;
    applicationEntityId: string;
}

export interface AnimalModel {
    id: string;
    type: string;
    birthdate: Date;
    breed: string;
    calvedBy: string;
    dateModified: Date;
    fedWith: string;
    healthCondition: string;
    legalId: string;
    locatedAt: string;
    location: Location;
    ownedBy: string;
    phenologicalCondition: string;
    relatedSource: RelatedSource[];
    reproductiveCondition: string;
    sex: string;
    siredBy: string;
    species: string;
    weight: any;
    welfareCondition: string;
    batchId: string;
}

