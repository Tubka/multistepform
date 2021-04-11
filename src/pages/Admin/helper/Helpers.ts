import { Fetcher } from '../../../helpers/Fetcher';
import { reduxAddForm, reduxAddStep, reduxDeleteForm, reduxSetForm } from '../../../store/actions/form';
import store from '../../../store/store';
import { Requests } from './Requests';

export class HandlerForms {
  static getForm = async () => {
    const result = await Requests.getForms();

    if(result.error) {
      alert('Błąd pobierania formularzy');
      return
    }

    store.dispatch(reduxSetForm(result.data.Forms))
  }

  static newForm = async (data: any) => {
    const result = await Requests.newForm(data);

    if(result.error) {
      alert('Spróbuj ponownie dodać formularz.')
      return
    }

    store.dispatch(reduxAddForm(result.data))
  }
  
  static newStep = async (id: string) => {
    const result = await Requests.newStep(id)

    if(result.error) {
      alert('Spróbuj ponownie dodać Step');
      return;
    }

    store.dispatch(reduxAddStep(result.data, id))
  }
  
  
  static deleteForm = async (id: string) => {
    const result = await Requests.deleteForm(id)
    
    if(result.error) {
      alert('Nie udało się usunąć');
      return;
    };
    
    store.dispatch(reduxDeleteForm(id))
  }

  static newElement = async (id: string) => {
    const result = await Requests.newElement(id)
  }

}