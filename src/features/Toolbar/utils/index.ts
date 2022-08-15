import { SetStateAction } from "react";

export const uniqueDevices = (devices: any) => {
    const uniqueDevices: any[] = [];
    devices.map((device: any) => {
        if (!uniqueDevices.includes(device.line.name)) {
            uniqueDevices.push(device.line.name);
        }
    });
    return uniqueDevices;
};

export const handleCategoryChange = (
    e: any,
    setCheckedCategories: { (value: SetStateAction<string[]>): void }
) => {
    const { name, checked } = e.target;
    setCheckedCategories((prevState: string[]) => {
        if (checked) {
            return [...prevState, name];
        } else {
            return prevState.filter((category: any) => category !== name);
        }
    });
};