import { get, post } from ".";
export interface addressinterface {
    ok: boolean;
    address: {
        street: String;
        city: String;
        state: String;
        zip: Number;
        country: String;
        mobile: Number;
    };
}
export const getAddress = () => {
    return get<addressinterface>('/user/address');
  };