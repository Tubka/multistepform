import { IDataLogin } from "../models/Login";
import { Fetcher } from "./Fetcher";

export class Requests {
  static getForms = () => {
    return Fetcher.get('/api/form/getformlist');
  }

  static getSteps = (id: string) => {
    return Fetcher.get(`api/form/getfullform?formid=${id}`)
  }

  static newForm = (name: string) => {
    return Fetcher.post('/api/form/createForm', {"name": name});
  }

  static newStep = (id: string) => {
    return Fetcher.post(`/api/form/createStep?formid=${id}`);
  }

  static newElement = (id: string, data: any) => {
    return Fetcher.post(`/api/form/createElement?stepid=${id}`, data)
  }

  static deleteForm = (id: string) => {
    return Fetcher.post(`/api/form/deleteform?formid=${id}`)
  }

  static signup = (data: IDataLogin) => {
    return Fetcher.post(`api/user/signup`, data)
  }
}
