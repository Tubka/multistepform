import fetch from '../axios';

// static get = <T>(url: string): Promise<int<T>> => {

interface int<T> {
  data: T;
}

export class Fetcher {
  static get = (url: string): Promise<any> => {
    return fetch.get(url).then(r => r).catch(err => ({error: true, msg: err.message, status: err.response.status}));
  };

  static post = (url: string, data?: unknown): Promise<any> => {
    return fetch.post(url, data).then(r => r).catch(err => ({error: true, msg: err.message, status: err.response.status}));
  };
};