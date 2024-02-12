import { get, post } from ".";
export interface addressinterface {
    ok: boolean;
    address: {
        street: String;
        city: String;
        state: String;
        zip: String;
        country: String;
        mobile: Number;
    };
}
interface FormData {
    street: String;
    city: String;
    state: String;
    zip: String;
    country: String;
    mobile: String;
  }
export const getAddress = () => {
    return get<addressinterface>('/user/address');
  };

  export const addAddress = (data:  {
    street: String;
    city: String;
    state: String;
    zip: String;
    country: String;
    mobile: Number;
}) => {
    return post<any>('/user/address', data);
  };