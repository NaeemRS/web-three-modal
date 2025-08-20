export function stringSlice(address = "", width1 = 10, width2 = 10) {
    if (!address) {
        return "";
    }
    return `${address.slice(0, width1)}...${address.slice(-width2)}`;
}