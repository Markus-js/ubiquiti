import { ChangeEvent, SetStateAction } from "react";
import { IDevice } from "../../../utils/types";

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
