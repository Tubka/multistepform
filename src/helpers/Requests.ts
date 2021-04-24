import { IDataLogin } from "../models/Login";
import { Fetcher } from "./Fetcher";

export class Requests {
  static getForms = () => {
    return Fetcher.get('/api/form/getuserforms');
  };

  static getSteps = (id: string) => {
    return Fetcher.get(`api/form/getfullform?formid=${id}`)
  };
  
  static getOneStep = (id: string) => {
    return Fetcher.get(`api/form/getstep=${id}`);
  }

  static newForm = (name: string) => {
    return Fetcher.post('/api/form/createForm', {"name": name});
  };

  static newStep = (id: string, position: number | null) => {
    return Fetcher.post(`/api/form/createStep?formid=${id}`, typeof position === 'number'? {position} : null);
  };

  static deleteStep = (idForm: string, idStep: string) => {
    return Fetcher.post(`/api/form/deletestep?formid=${idForm}&stepid=${idStep}`);
  };

  static newElement = (id: string, data: any) => {
    return Fetcher.post(`/api/form/createelement?stepid=${id}`, data)
  };

  static deleteElement = (idStep: string, idElement: string) => {
    return Fetcher.post(`/api/form/deleteelement?stepid=${idStep}&elementid=${idElement}`)
  };

  static deleteForm = (id: string) => {
    return Fetcher.post(`/api/form/deleteform?formid=${id}`)
  };

  static signup = (data: IDataLogin) => {
    return Fetcher.post(`api/user/signup`, data)
  };

  static googleApi = (code: string | null) => {
    return Fetcher.get(`api/user/google/callback?code=${code}`)
  };

}