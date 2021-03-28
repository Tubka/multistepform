import { IElement } from '../../../models/Form.models';

interface IProps {
  element: IElement;
}

export const ChooseElement = ({element} : IProps): JSX.Element => {
  const CustomTag = element.element as keyof JSX.IntrinsicElements;

  return (
    <>
      {element.element === 'input' && <CustomTag {...element.properties}/>}
      {element.element === 'select' && 
      <CustomTag {...element.properties} style={{width: '100px'}}>
        {CustomTag === 'select' && element.options?.map((oneOption, index: number) => <option key={index}>{oneOption}</option>)}
      </CustomTag>}
    </>
  )
}