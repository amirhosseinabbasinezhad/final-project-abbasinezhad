import Cookie from 'js-cookie';

export const tokenKey = 'accessToken';

export function setToken(token: string) {
  Cookie.set(tokenKey, token, { expires: 7 });
}

export function getToken() {
  const token = Cookie.get(tokenKey);
  return token;
}

export function removeToken() {
  Cookie.remove(tokenKey);
}
