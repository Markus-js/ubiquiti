interface IDeviceState {
    devicesStore: IDeviceReducer;
}

interface IDeviceReducer {
    filterDevices: IDevice[];
    devices: IDevice[];
    listView: boolean;
}

interface IDevice {
    guids: [];
    icon: {
        id: string;
        resolutions: [[number, number]];
    };
    line: {
        id: string;
        name: string;
    };
    product: {
        abbrev: string;
        name: string;
    };
    shortnames: [string];
    triplets: [
        {
            k2: string;
            k1: string;
        }
    ];
    unifi?: {
        network?: {
            radios?: {
                na?: {
                    maxPower?: number;
                    maxSpeedMegabitsPerSecond?: number;
                };
            };
            numberOfPorts?: number;
        };
    };
}

export type { IDevice, IDeviceState };
