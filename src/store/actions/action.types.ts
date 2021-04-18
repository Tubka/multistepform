import { IElement, IForm, IStep } from '../../models/Form.models';
import { ActionTypes } from './action.enum';

export interface SetForms {
  type: ActionTypes.SET_FORMS;
  forms: IForm[];
}

export interface SetSteps {
  type: ActionTypes.SET_STEPS;
  steps: IStep[];
  id: string;
}

export interface AddForm {
  type: ActionTypes.ADD_FORM;
  form: IForm;
}

export interface AddStep {
  type: ActionTypes.ADD_STEP;
  step: IStep;
  idForm: string;
  position: number | null;
}

export interface AddElement {
  type: ActionTypes.ADD_ELEMENT;
  steps: IStep[];
  idForm: string;
}

export interface DeleteForm {
  type: ActionTypes.DELETE_FORM;
  id: string;
}

export type ActionType =
    SetForms
  | SetSteps
  | AddForm
  | AddStep
  | AddElement
  | DeleteForm