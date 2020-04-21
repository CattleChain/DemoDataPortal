export interface Attribute {
    object_id: string;
    name: string;
    type: string;
}

export interface StaticAttribute {
    name: string;
    type: string;
    value: string;
}

export interface Device {
    device_id: string;
    service: string;
    service_path: string;
    entity_name: string;
    entity_type: string;
    transport: string;
    attributes: Attribute[];
    lazy: any[];
    commands: any[];
    static_attributes: StaticAttribute[];
    protocol: string;
}

export interface DeviceModel {
    count: number;
    devices: Device[];
}
