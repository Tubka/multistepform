import { IElement, IForm, IStep } from '../../models/Form.models';
import { ActionTypes } from './action.enum';

export interface SetForm {
  type: ActionTypes.SET_FORM;
  forms: IForm[];
}

export interface AddForm {
  type: ActionTypes.ADD_FORM;
  form: IForm;
}

export interface AddStep {
  type: ActionTypes.ADD_STEP
  step: IStep;
  id: string;
}

export interface AddElement {
  type: ActionTypes.ADD_ELEMENT
  element: IElement
}

export interface DeleteForm {
  type: ActionTypes.DELETE_FORM
  id: string
}



export type ActionType =
    SetForm
  | AddForm
  | AddStep
  | AddElement
  | DeleteForm