interface IProperties {
  [key: string]: string;
}

interface IStyle {
  [key: string]: string
}

interface IElement {
  id: string | number;
  label: string;
  element: string;
  type?: string;
  description?: string;
  options?: string[];
  properties?: IProperties;
  style?: IStyle;
}

interface IStep {
  id: string | number;
  elements: IElement[];
}

export interface IForm {
  id: string | number;
  name: string;
  steps: IStep[];
  style?: IStyle;
}