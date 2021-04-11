import instance from '../axios';

export class Fetcher {
  static get = async (url: string): Promise<any> => {
    console.log(url)
    return await instance.get(url).then(r => r).catch(err => ({error: true, msg: err.message, status: err.status}))
  }

  static post = async (url: string, data?: unknown): Promise<any> => {
    console.log(url, data)
    return await instance.post(url, data).then(r => r).catch(err => ({error: true, msg: err.message, status: err.status}))
  }
}