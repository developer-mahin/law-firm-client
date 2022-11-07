import './App.css';
import { Button, Spinner } from 'flowbite-react';

function App() {
  return (
    <div className="App">
      <Button>
        <Spinner aria-label="Spinner button example" />
        <span className="pl-3">
          Loading...
        </span>
      </Button>
    </div>
  );
}

export default App;
