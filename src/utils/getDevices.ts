export const getDevices = async () => {
    const query = await fetch(
        "https://static.ui.com/fingerprint/ui/public.json"
    );
    const data = await query.json();
    return data.devices;
};
