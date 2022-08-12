interface IDeviceState {
    devicesStore: IDevice;
}

interface IDevice {
    devices: IDevice;
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
    // unifi?: {
    //     network?: {
    //         radios?: {
    //             na?: {
    //                 maxPower?: number;
    //                 maxSpeedMegabitsPerSecond?: number;
    //             };
    //         };
    //         numberOfPorts?: number;
    //     };
    // };
}

export type { IDevice, IDeviceState };
