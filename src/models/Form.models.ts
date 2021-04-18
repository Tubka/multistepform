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
  styles?: IStyle;
  position: number;
}

export interface IStep {
  _id: string;
  elements: IElement[];
  position: number;
}

export interface IForm {
  _id: string;
  name: string;
  steps: IStep[];
  style?: IStyle;
}

export interface IFormObj {
  [key: string]: IForm;
}

export interface IStepObj {
  [key: string]: IStep;
}