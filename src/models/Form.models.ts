export interface IProperties {
  [key: string]: string;
}

interface IStyle {
  [key: string]: string;
}

export interface IElement {
  _id: string;
  label: string;
  element: string;
  // type: string;
  description?: string;
  options?: string[];
  properties?: IProperties;
  style?: IStyle;
}

export interface IStep {
  _id: string;
  elements: IElement[];
}

export interface IForm {
  _id: string;
  name: string;
  steps: IStep[] | IStepObj;
  style?: IStyle;
}

export interface IFormObj {
  [key: string]: IForm;
}

export interface IStepObj {
  [key: string]: IStep;
}