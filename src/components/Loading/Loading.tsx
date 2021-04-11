import classes from './Loading.module.css';
import ReactLoading from 'react-loading';

export const Loading = () => {

  return (
    <div className={classes.containerLoading}>
      <ReactLoading type={'spinningBubbles'} color={'#074DB6'} height={'20%'} width={'20%'} />
    </div>
  )
}