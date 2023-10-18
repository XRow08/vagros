export const AddressUtils = {
  cleanAddress(address: string) {
    address = address.replace(/^['"]+|['"]+$/g, "");
    if (!address.startsWith("0x")) {
      address = "0x" + address;
    }
    if (!address) {
      throw new Error("Invalid Ethereum address");
    }
    return "'" + address.slice(2) + "'";
  },

  hideAddress(address: string) {
    const firstFour = address.substring(0, 4);
    const lastFour = address.slice(-4);
    return `${firstFour}...${lastFour}`;
  },
};
