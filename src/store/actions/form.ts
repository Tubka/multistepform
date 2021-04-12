import { IForm, IStep, IElement } from '../../models/Form.models';
import { ActionTypes } from './action.enum';
import { AddElement, AddForm, AddStep, DeleteForm, SetForms, SetSteps } from './action.types';

export const reduxSetForm = (forms: IForm[]): SetForms => {
  return {
    type: ActionTypes.SET_FORMS,
    forms
  }
}

export const reduxSetSteps = (steps: IStep[], id: string): SetSteps => {
  return {
    type: ActionTypes.SET_STEPS,
    steps,
    id
  }
}

export const reduxAddForm = (form: IForm): AddForm => {
  return {
    type: ActionTypes.ADD_FORM,
    form
  }
}

export const reduxAddStep = (step: IStep, id: string): AddStep => {
  return {
    type: ActionTypes.ADD_STEP,
    step,
    id
  }
}

export const reduxAddElement = (element: IElement, id: string): AddElement => {
  return {
    type: ActionTypes.ADD_ELEMENT,
    element
  }
}

export const reduxDeleteForm = (id: string): DeleteForm => {
  return {
    type: ActionTypes.DELETE_FORM,
    id
  }
}