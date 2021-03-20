import logo from './logo.svg';
import './App.css';
import { LoginPage } from './components/LoginPage/LoginPage';
import { Navigation } from './components/Navigation/Navigation';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
};

export default App;