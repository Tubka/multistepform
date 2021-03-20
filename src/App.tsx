import logo from './logo.svg';
import './App.css';
import { LoginPage } from './components/LoginPage/LoginPage';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
};

export default App;
