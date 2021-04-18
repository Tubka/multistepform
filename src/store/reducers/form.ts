import { addSyntheticTrailingComment } from 'typescript';
import { IFormObj, IForm, IStepObj, IStep } from '../../models/Form.models';
import { ActionTypes } from "../actions/action.enum";
import { ActionType } from "../actions/action.types";
import { FormState } from "../models/form.model";

const initialState: FormState = {
  forms : null,
}
export const formReducer = (state = initialState, action: ActionType): FormState=> {
  switch (action.type) {
    case ActionTypes.SET_FORMS:
      const forms: IFormObj = {} 
      if(action && action.forms) {
        action.forms.map((form: IForm) => {
          forms[form['_id']] = form;
        });
      } 
      return {
        ...state,
        forms
      }

    case ActionTypes.SET_STEPS:
      const steps: IStep[] = []
      const formWithSteps: IFormObj | null = state.forms

      if(!formWithSteps) return {...state}


      formWithSteps[action.id].steps = action.steps


      return {
        ...state,
        forms: formWithSteps
      };

    case ActionTypes.ADD_FORM:
      const addForm = {...state.forms, [action.form['_id']]:action.form}
      return {
        ...state,
        forms: addForm
      }

    case ActionTypes.ADD_STEP:
      const addStep = state.forms;
      if(!action.position && addStep) {
        addStep[action.idForm].steps.push(action.step);

        return {
          ...state,
          forms: addStep,
        }
      }
      if(addStep && addStep[action.idForm] && action.position){
        const place = action.position - 1;
        const arrSteps = addStep[action.idForm].steps;
        const beginArray = arrSteps.splice(0, place);

        beginArray.push(action.step)
        addStep[action.idForm].steps = beginArray.concat(arrSteps)
      }

      return {
        ...state,
        forms: addStep,
      };

    case ActionTypes.ADD_ELEMENT:

      if(state.forms) {
        return {
          ...state,
          forms: {
            ...state.forms,
            [action.idForm]: {
              ...state.forms[action.idForm], 
              steps: action.steps
            }
          }
        };
      };

      return {
        ...state
      }
    
      
    

    case ActionTypes.DELETE_FORM:
      const deleteForm = state.forms;

      if(deleteForm) {
        delete deleteForm[`${action.id}`];
      }

      return {
        ...state,
        forms: deleteForm
      }
    
    default:
      return {...state}
  }
}
