import { IFormObj } from '../../models/Form.models';


interface IProps {
  forms: IFormObj | null;
  onclick: (id: string | null) => void
} 

export const ListForms = ({forms, onclick} : IProps) => {
  if(forms) {
    return (
      <ul>
        {Object.values(forms).map(el => <li key={el._id} onClick={() => onclick(el._id)}>{el.name}</li>)}
      </ul>
  )}
  return <></>
}