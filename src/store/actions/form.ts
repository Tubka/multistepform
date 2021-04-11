import { IForm, IStep, IElement } from '../../models/Form.models';
import { ActionTypes } from './action.enum';
import { AddElement, AddForm, AddStep, DeleteForm, SetForm } from './action.types';

export const reduxSetForm = (forms: IForm[]): SetForm => {
  return {
    type: ActionTypes.SET_FORM,
    forms
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