import { Fetcher } from '../../helpers/Fetcher';
import { reduxAddElement, reduxAddForm, reduxAddStep, reduxDeleteForm, reduxSetForm, reduxSetSteps } from '../../store/actions/form';
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
    if(result.error) {
      alert('Nie udało się pobrać formularza, spróbuj odświeżyć stronę.');
      return;
    }
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
  
  static newStep = async (idForm: string, position: number | null) => {
    const result = await Requests.newStep(idForm, position);
    if(result.error) {
      alert('Spróbuj ponownie dodać Step');
      return;
    }

    store.dispatch(reduxAddStep(result.data, idForm, position));
  }

  static deleteStep = async (idForm: string, idStep: string) => {
    const result = await Requests.deleteStep(idForm, idStep);
    if(result.error) {
      alert('Nie udało się usunąć kroku, spróbuj ponownie.');
      return;
    }
    const steps = await Requests.getSteps(idForm);
    store.dispatch(reduxSetSteps(steps.data.steps, idForm));
  }
  
  
  static deleteForm = async (id: string) => {
    const result = await Requests.deleteForm(id);
    
    if(result.error) {
      alert('Nie udało się usunąć formularza');
      return;
    };
    
    store.dispatch(reduxDeleteForm(id));
  }

  static newElement = async (idForm: string, idStep: string, data: any) => { // TODO
    const result = await Requests.newElement(idStep, data);
    if(result.error) {
      alert('Nie udało się dodać elementu');
      return;
    };

    store.dispatch(reduxAddElement(idForm, result.data));
  }

  static deleteElement = async (idForm: string, idStep: string, idElement: string) => { // TODO
    const result = await Requests.deleteElement(idStep, idElement);
    if(result.error) {
      alert('Nie udało się usunąć elementu');
      return;
    };

    store.dispatch(reduxAddElement(idForm, result.data));
  }

}