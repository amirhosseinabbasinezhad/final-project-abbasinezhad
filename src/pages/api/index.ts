import { AxiosRequestConfig } from 'axios';

import { apiAgent } from './config';
import { getToken } from './token';
import { onSuccess, onError } from './utils';

export async function get<T>(path: string, config?: AxiosRequestConfig) {
  try {
    const response = await apiAgent.get<T>(path, config);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export async function delete_<T>(path: string, params: AxiosRequestConfig['params'] = null, data?: any) {
  try {
    const response = await apiAgent.delete<T>(path, { params, data });
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export async function post<T>(path: string, data?: any, config?: AxiosRequestConfig<T>) {
  try {
    const response = await apiAgent.post<T>(path, data, config);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export async function patch<T>(
  path: string,
  data: any,
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
  params?: any
) {
  try {
    const response = await apiAgent.patch<T>(path, data, { headers, params });
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export async function put<T>(
  path: string,
  data: any,
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
  params?: any
) {
  try {
    const response = await apiAgent.put<T>(path, data, { headers, params });
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}
