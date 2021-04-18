import classes from './Loading.module.css';
import ReactLoading from 'react-loading';

interface IProps {
  small?: boolean;
  contrast?: boolean;
}

export const Loading = ({small = false, contrast = false}: IProps) => {

  return (
    <div className={classes.containerLoading}>
      <ReactLoading type={'spinningBubbles'} color={contrast ? 'white' : '#074DB6'} height={small? '100px' : '20%'} width={small ? '100px': '20%'} />
    </div>
  )
}