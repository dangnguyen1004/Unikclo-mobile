import {LIVEURL} from '@env';
import AsyncStorage from '@react-native-community/async-storage';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import {StatusCode} from '../constants/statusCodes';
import {TOKEN} from '../constants/storageKeys';

export const staging = false;

export const apiRootLive = LIVEURL;
export const apiRootStaging = 'YOUR LOCAL URL';
export const apiRoot = !staging ? apiRootLive : apiRootStaging;

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': false,
  'X-Requested-With': 'XMLHttpRequest',
};

const injectToken = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  try {
    const token = await AsyncStorage.getItem(TOKEN); // TODO: local storage || cookies

    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    throw new Error(error);
  }
};

class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  static queryParamsURLEncodedString(params: Record<string, any>): string {
    const str: string[] = [];
    for (const p in params) {
      if (typeof params[p] === 'object') {
        for (const v in params[p]) {
          str.push(
            encodeURIComponent(`${p}.${v}`) +
              '=' +
              encodeURIComponent(params[p][v]),
          );
        }
      } else {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
      }
    }
    return str.join('&');
  }

  initHttp() {
    const http = axios.create({
      baseURL: apiRoot,
      headers,
      withCredentials: false,
    });

    http.interceptors.request.use(injectToken, error => Promise.reject(error));

    http.interceptors.response.use(
      response => response,
      error => {
        const {response} = error;
        return this.handleError(response);
      },
    );

    this.instance = http;
    return http;
  }

  request<T = unknown, R = unknown>(
    config: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return this.http.request<T, AxiosResponse<R>>(config);
  }

  get<T = unknown, R = unknown>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    const query = data ? Http.queryParamsURLEncodedString(data) : '';
    return this.http.get<T, AxiosResponse<R>>(url + '?' + query, config);
  }

  post<T = unknown, R = unknown>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return this.http.post<T, AxiosResponse<R>>(url, data, config);
  }

  put<T = unknown, R = unknown>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return this.http.put<T, AxiosResponse<R>>(url, data, config);
  }

  delete<T = unknown, R = unknown>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return this.http.delete<T, AxiosResponse<R>>(url, config);
  }

  private handleError(error: AxiosResponse<any>) {
    const {status} = error;
    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break;
      }
      case StatusCode.Unauthorized: {
        break;
      }
      case StatusCode.TooManyRequests: {
        break;
      }
      case StatusCode.BadRequest: {
        break;
      }
    }

    return Promise.reject(error);
  }
}

export const http = new Http();
