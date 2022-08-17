import { SetStateAction } from "react";
import { IDevice } from "../utils/types";

const getDevices = async () => {
    const query = await fetch(
        "https://static.ui.com/fingerprint/ui/public.json"
    );
    const data = await query.json();
    return data.devices;
};

const getProductIcon = (id: string, res: number) =>
    `https://static.ui.com/fingerprint/ui/icons/${id}_${res}x${res}.png`;

export const uniqueDevices = (devices: IDevice[]) => {
    const uniqueDevices: string[] = [];
    devices.map(device => {
        if (!uniqueDevices.includes(device.line.name)) {
            uniqueDevices.push(device.line.name);
        }
    });
    return uniqueDevices;
};

export const handleCategoryChange = (
    eventTarget: EventTarget,
    setCheckedCategories: { (value: SetStateAction<string[]>): void }
) => {
    const { name, checked } = eventTarget as HTMLInputElement;
    setCheckedCategories((prevState: string[]) => {
        if (checked) {
            return [...prevState, name];
        } else {
            return prevState.filter((category: string) => category !== name);
        }
    });
};

const formatDeviceProperties = (device: IDevice | undefined) => {
    if (device) {
        return [
            {
                title: "Product Line",
                value: device.line.name,
            },
            {
                title: "ID",
                value: device.line.id,
            },
            {
                title: "Name",
                value: device.product.name,
            },
            {
                title: "Short name",
                value: device.shortnames[0] || "N/A",
            },
            {
                title: "Max. power",
                value:
                    `${device.unifi?.network?.radios?.na?.maxPower} W` || "N/A",
            },
            {
                title: "Speed",
                value:
                    `${device.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond} Mbps` ||
                    "N/A",
            },
            {
                title: "Number of ports",
                value: device.unifi?.network?.numberOfPorts || "N/A",
            },
        ];
    }
};

export { getDevices, getProductIcon, formatDeviceProperties };
