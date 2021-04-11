import './App.css';
import { Authentication } from './Authentication';
import { AuthProvider } from './AuthProvider/AuthProvider';
import { useAuthState } from './AuthProvider/useAuthState';
import { Unauthentication } from './Unauthentication';

const App = (): JSX.Element => {
  const Content = () => {
    const {state, setState} = useAuthState()
    return (
      <>
        {state.user ? <Authentication/> : <Unauthentication />}
      </>
    )
  }

  return (
    <AuthProvider>
      <Content />
    </AuthProvider>
  )
};

export default App;

