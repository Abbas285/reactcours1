import logo from './logo.svg';
import './App.css';
import Index from './componet/index'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Index/>
      </BrowserRouter>
    </div>
  );
}

export default App;
