import React from 'react';

export const ChooseElement = ({element, handleEdit} : any): JSX.Element => {
  const CustomTag = element.element as keyof JSX.IntrinsicElements;

  return (
    <>
      {element.element === 'input' && <CustomTag type={element.type}/>}
      {element.element === 'select' && 
      <CustomTag style={{width: '100px'}}>
        {CustomTag === 'select' && element.options?.map((oneOption: any) => <option>{oneOption}</option>)}
      </CustomTag>}
    </>
  )
}