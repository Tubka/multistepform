import { FormTypes } from '../../../helpers/Contans.enum';
import { IElement } from '../../../models/Form.models';

interface IProps {
  element: IElement;
}

export const ChooseElement = ({element} : IProps): JSX.Element => {
  const CustomTag = element.element as keyof JSX.IntrinsicElements;


  if(CustomTag === FormTypes.Input) {
    return <CustomTag {...element.properties} style={{...element.styles}}/>;
  };
  if(CustomTag === FormTypes.Select) {
    return  <CustomTag {...element.properties} style={{...element.styles}}>
              {element.options?.map((oneOption, index: number) => <option key={index}>{oneOption}</option>)}
            </CustomTag>
  }
  return (
    <>
      {/* { && }
      { && 
      <CustomTag {...element.properties} style={{...element.styles}}>
        {element.options?.map((oneOption, index: number) => <option key={index}>{oneOption}</option>)}
      </CustomTag>} */}
    </>
  )
}