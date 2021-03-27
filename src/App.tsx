import './App.css';
import React from 'react';
import { AdminPanel } from './components/AdminPanel/AdminPanel';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <AdminPanel />
    </div>
  );
};

export default App;