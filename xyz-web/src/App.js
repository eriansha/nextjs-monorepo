import logo from './logo.svg';
import './App.css';
import { Button } from '@shared/ui-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to xyz web.
        </p>
        <Button>
          Click here from shared component
        </Button>
      </header>
    </div>
  );
}

export default App;
