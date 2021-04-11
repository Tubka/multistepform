export interface IProperties {
  [key: string]: string;
}

interface IStyle {
  [key: string]: string;
}

export interface IElement {
  id: string | number;
  label: string;
  element: string;
  // type: string;
  description?: string;
  options?: string[];
  properties?: IProperties;
  style?: IStyle;
}

export interface IStep {
  id: string | number;
  elements: IElement[];
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