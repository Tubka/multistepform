import { Fetcher } from "../../../helpers/Fetcher";

export class Requests {
  static getForms = () => {
    return Fetcher.get('/api/form/getformlist');
  }

  static newForm = (name: string) => {
    return Fetcher.post('/api/form/createForm', {"name": name});
  }

  static newStep = (id: string) => {
    return Fetcher.post(`/api/form/createStep?formid=${id}`);
  }

  static newElement = (id: string) => {
    return Fetcher.post(`/api/form/createElement?stepid=${id}`)
  }

  static deleteForm = (id: string) => {
    return Fetcher.post(`/api/form/deleteform?formid=${id}`)
  }
}
