import { IFormObj, IForm } from "../../models/Form.models";
import { ActionTypes } from "../actions/action.enum";
import { ActionType } from "../actions/action.types";
import { FormState } from "../models/form.model";

const initialState: FormState = {
  forms : null,
}

export const formReducer = (state = initialState, action: ActionType): FormState => {
  switch (action.type) {
    case ActionTypes.SET_FORM:
      const forms: IFormObj = {} 
      action.forms.map((form: IForm) => {
        forms[form['_id']] = form
      });
      return {
        ...state,
        forms
      }

    case ActionTypes.ADD_FORM:
      const addForm = {...state.forms, [action.form['_id']]:action.form}
      return {
        ...state,
        forms: addForm
      }

    case ActionTypes.ADD_STEP:
      const addStep = state.forms;
      
      if(addStep){
        addStep[action.id].steps = [...addStep[action.id].steps, action.step]
      }

      return {
        ...state,
        forms: addStep,
      }

    case ActionTypes.DELETE_FORM:
      const formss = state.forms

      if(formss) {
        delete formss[`${action.id}`]
      }

      return {
        ...state,
        forms: formss
      }
    
    default:
      return {...state}
  }
}
