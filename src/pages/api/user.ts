import { post, patch, delete_, get } from '.';

export type userType = {
  name: string;
  phone: string;
  credit: number;
  dayOfBirth: number;
  monthOfBirth: number;
  yearOfBirth: number;
  gender: string;
  shenasnameh: string;
  codemelli: string;
  type: string;
  companyType: string;
  registration: string;
  economy: string;
  signRightOwners: string;
  cardfront: string;
  cardback: string;
  vatFile: string;
};

export const sendCode = (data: { phone: string }) => {
  return post<{ msg: string }>('/user/phone', data);
};

export const verifyCode = (data: { phone: string; code: string; referrerPhone?: string }) => {
  return post<{ user: userType; token: string }>('/user/code', data);
};

export const patchPhone = (data: { phone: string }) => {
  return patch<{ msg: string }>('/user/me/phone', data);
};

export const getMe = () => {
  return get<{ msg: string }>('/user/me');
};

export const patchUserInfo = (data: { name: string; email: string }) => {
  return patch<{ msg: string }>('/user/me', data);
};

export const DeleteUserAddress = (data: { id: String }) => {
  return delete_<{ msg: string }>(`/user/me/address/${data.id}`);
};

export const logout = () => {
  return post('/user/logout');
};
