const getDevices = async () => {
    const query = await fetch(
        "https://static.ui.com/fingerprint/ui/public.json"
    );
    const data = await query.json();
    return data.devices;
};

const getProductIcon = (id: string, res: number) =>
    `https://static.ui.com/fingerprint/ui/icons/${id}_${res}x${res}.png`;

const formatDeviceProperties = (device: any | undefined) => {
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
