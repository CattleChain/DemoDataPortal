export interface Entity {
    idPattern: string;
    type: string;
}

export interface Condition {
    attrs: string[];
}

export interface Subject {
    entities: Entity[];
    condition: Condition;
}

export interface Http {
    url: string;
}

export interface Notification {
    attrs: any[];
    onlyChangedAttrs: boolean;
    attrsFormat: string;
    http: Http;
}

export interface SubscriptionModel {
    id: string;
    description: string;
    status: string;
    subject: Subject;
    notification: Notification;
}


