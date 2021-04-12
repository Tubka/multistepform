import { Fetcher } from '../../helpers/Fetcher';
import { reduxAddForm, reduxAddStep, reduxDeleteForm, reduxSetForm, reduxSetSteps } from '../../store/actions/form';
import store from '../../store/store';
import { Requests } from '../../helpers/Requests';

export class HandlerForms {


  static getForm = async () => {
    const result = await Requests.getForms();
    if(result.error) {
      alert('Błąd pobierania formularzy');
      return;
    }

    store.dispatch(reduxSetForm(result.data));
  }
  
  static getSteps = async (id: string) => {
    const result = await Requests.getSteps(id);
    store.dispatch(reduxSetSteps(result.data.steps, id));

  }

  static newForm = async (data: any) => {
    const result = await Requests.newForm(data);

    if(result.error) {
      alert('Spróbuj ponownie dodać formularz.');
      return;
    }

    store.dispatch(reduxAddForm(result.data));
  }
  
  static newStep = async (id: string) => {
    const result = await Requests.newStep(id);

    if(result.error) {
      alert('Spróbuj ponownie dodać Step');
      return;
    }

    store.dispatch(reduxAddStep(result.data, id));
  }
  
  
  static deleteForm = async (id: string) => {
    const result = await Requests.deleteForm(id);
    
    if(result.error) {
      alert('Nie udało się usunąć');
      return;
    };
    
    store.dispatch(reduxDeleteForm(id));
  }

  static newElement = async (id: string, data: any) => { // TODO
    const result = await Requests.newElement(id, data);
  }

}